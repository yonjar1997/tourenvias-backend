const AWS = require('aws-sdk');

const deleteConductor = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    

    await dynamodb.delete({
        TableName: 'tourenviasTabla',
        Key: {
           id,
        },
    }).promise();

    return {
        status: 200,
        body: {
            message: 'candidato eliminado',

        },
    };
}

module.exports = {
    deleteConductor
}