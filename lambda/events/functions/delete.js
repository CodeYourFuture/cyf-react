import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

/* eslint-disable import/prefer-default-export */
export async function main(event, context, callback) {
  const params = {
    TableName: 'events',
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      eventId: event.pathParameters.id,
    },
  };
  try {
    const result = await dynamoDbLib.call('delete', params);
    callback(null, success({ status: true }));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
