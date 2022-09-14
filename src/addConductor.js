const {v4} = require('uuid')
const AWS = require('aws-sdk');

const addConductor = async (event) => {
    
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { nombre } = JSON.parse(event.body);
    const createFecha = new Date()
    const id = v4()

    const newConductor = {
        id,
        createFecha,
        nombre,
        
    }

    await dynamodb.put({
        TableName: 'tourenviasTabla',
        Item: newConductor
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newConductor)
    }
}

module.exports = {
    addConductor,
};