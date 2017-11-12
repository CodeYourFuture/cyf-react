import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  const params = {
    TableName: 'events',
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': event.requestContext.identity.cognitoIdentityId,
    },
  };
  try {
    const result = await dynamoDbLib.call('query', params);
    callback(null, success(result.Items));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
