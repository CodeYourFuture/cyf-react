import request from 'request';
import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

function getAuthToken() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: 'https://code-your-future.eu.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: {
        grant_type: 'client_credentials',
        client_id: 'fjPqeEHUHWPT4pPXAvX5zijAn2P7IdiB',
        // TODO: move this to an environment variable
        client_secret: process.env.AUTH0_ADMIN_CLIENT_SECRET,
        // 'MD1bzBViJmA1AzikwL9czUjtY-3OZ4YZO2Pf6RQ-73ybQJvUiV5W68Ea5SYxXUq8',
        audience: 'https://code-your-future.eu.auth0.com/api/v2/',
      },
      json: true,
    };

    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      }

      resolve(body.access_token);
    });
  });
}

const BASE_URL_USER = 'https://code-your-future.eu.auth0.com/api/v2/users/';

function getUser(userId, accessToken) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `${BASE_URL_USER}${userId}`,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      json: true,
    };

    request(options, (error, response, body) => {
      if (error) {
        reject(body);
      }
      if (body.error) {
        reject(body);
      }

      resolve(body);
    });
  });
}

/* eslint-disable import/prefer-default-export */
export async function main(lambdaEvent, context, callback) {
  const params = {
    TableName: dynamoDbLib.tableName(),
    Key: {
      eventId: lambdaEvent.pathParameters.id,
    },
  };
  const accessToken = await getAuthToken();

  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      // We have the event
      const event = result.Item;
      const { mentors } = event;

      const allUsers = [];

      // eslint-disable-next-line  no-restricted-syntax
      for (const mentor of mentors) {
        try {
          // eslint-disable-next-line  no-await-in-loop
          const user = await getUser(mentor, accessToken);
          allUsers.push(user);
        } catch (error) {
          callback(null, failure({ status: 'error', result: error }));
        }
      }

      callback(null, success({ users: allUsers }));
    } else {
      callback(null, failure({ status: false, error: 'Item not found.' }));
    }
  } catch (e) {
    callback(null, failure({ status: 'error', result: e }));
  }
}
