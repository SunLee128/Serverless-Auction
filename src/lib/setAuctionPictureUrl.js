import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function setAuctionPictureUrl (id, pictureUrl) {
  const params = {
    TableName                 : process.env.AUCTIONS_TABLE_NAME,
    Key                       : { id },
    UpdatedExpression         : 'set pictureUrl = :pictureUrl',
    ExpressionAttributeValues : {
      ':pictureUrl' : 'ALL_NEW'
    }
  };
  const result = await dynamodb.update(params).promise();
  return result.Attributes;
}
