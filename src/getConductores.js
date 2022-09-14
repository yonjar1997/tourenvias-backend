const AWS = require('aws-sdk');

const getConductores = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName:'tourenviasTabla'

    }).promise()

    const conductor = result.Items;

    return {
        status: 200,
        body: {
            conductor
        },
    }
}

module.exports = {
    getConductores
}