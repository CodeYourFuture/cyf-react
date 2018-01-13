import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

/* eslint-disable import/prefer-default-export */
export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'events',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId || 'CYFMentor',
      eventId: uuid.v1(),
      title: data.body.title,
      description: data.body.description,
      startDate: data.body.startDate,
      endDate: data.body.endDate,
      city: data.body.city,
      location: data.body.location,
      createdAt: new Date().getTime(),
    },
  };

  console.log(params);
  try {
    const result = await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
