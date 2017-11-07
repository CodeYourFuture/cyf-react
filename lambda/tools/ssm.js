const AWS = require('aws-sdk');
const ssm = new AWS.SSM({ region: 'eu-west-1' });

exports.getParameter = (name) => new Promise((resolve, reject) => {
  ssm.getParameters({ Names: [name], WithDecryption: true }, (err, data) => {
    if (err) return reject(err);
    return resolve(data['Parameters'][0]['Value'])
  })
});
