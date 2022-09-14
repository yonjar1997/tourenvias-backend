const AWS = require('aws-sdk');

const getConductor = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    const result = await dynamodb.get({
        TableName: 'tourenviasTabla',
        Key: {
            id
        }
    }).promise()
    const conductor = result.Item

    return {
        status: '200',
        body: conductor
    }
}



module.exports = {
    getConductor
}