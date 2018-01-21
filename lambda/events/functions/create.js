import uuid from 'uuid';
import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

/* eslint-disable import/prefer-default-export, no-console */
export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'events',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId || 'CYFMentor',
      eventId: uuid.v1(),
      createdAt: new Date().getTime(),
      city: data.body.city,
      startDate: data.body.startDate,
      endDate: data.body.endDate,
      location: data.body.location,
      intake: data.body.intake,
      topic: data.body.topic,
      description: data.body.description,
      moduleLeaders: data.body.moduleLeaders,
      mentors: data.body.mentors,
      links: data.body.links,
    },
  };

  console.log(params);
  try {
    // eslint-disable-next-line no-unused-vars
    const result = await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
