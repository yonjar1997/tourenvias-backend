
const AWS = require('aws-sdk');

const updateConductor = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const  {nombre} = JSON.parse(event.body);

    await dynamodb.update({

        TableName:'tourenviasTabla',
        Key: {id},
        UpdateExpression:'set nombre = :nombre',
                          
                            
        ExpressionAttributeValues:{
            ':nombre': nombre
        },
        ReturnValues: 'ALL_NEW'
    }).promise()

    return{
        status: 200,
        body: JSON.stringify({
            message: 'conductor actualizado correctamente'
        }),
    };
};

module.exports = {

    updateConductor,
};