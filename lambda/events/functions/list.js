import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

// eslint-disable-next-line import/prefer-default-export
export async function main(event, context, callback) {
  const params = { TableName: dynamoDbLib.tableName() };

  try {
    const result = await dynamoDbLib.call('scan', params);
    callback(null, success(result.Items));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
