import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

/* eslint-disable import/prefer-default-export, no-console */
export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: dynamoDbLib.tableName(),
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId || 'CYFMentor',
      eventId: uuid.v1(),
      createdAt: new Date().getTime(),
      location: data.location,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      description: data.description,
      title: data.title,
      mentors: [],
    },
  };

  try {
    // eslint-disable-next-line no-unused-vars
    const result = await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
