import AWS from 'aws-sdk';

AWS.config.update({ region: 'eu-west-1' });

/* eslint-disable import/prefer-default-export */
export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}

export function tableName() {
  if (process.env.ENVIRONMENT === 'production') {
    return 'production-events';
  } else if (process.env.ENVIRONMENT === 'staging') {
    return 'staging-events';
  } else if (process.env.ENVIRONMENT === 'dev') {
    return 'dev-events';
  }

  return 'events';
}
