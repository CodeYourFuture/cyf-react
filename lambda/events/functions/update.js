import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

/* eslint-disable import/prefer-default-export */
export async function main(event, context, callback) {
  const data = JSON.parse(event.body);

  try {
    // Only update the mentors for now
    if (data.mentors) {
      const params = {
        TableName: dynamoDbLib.tableName(),
        Key: {
          eventId: event.pathParameters.id,
        },
        UpdateExpression: 'SET mentors = :mentors',
        ExpressionAttributeValues: {
          ':mentors': data.mentors ? data.mentors : null,
        },
        ReturnValues: 'ALL_NEW',
      };

      await dynamoDbLib.call('update', params);
    }

    callback(null, success({ status: true }));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
