import { text } from 'express'
import { MongoClient } from 'mongodb'

export const Mongo ={
    async connect({mongoConnectionString, mongoDbmane}){
        try{
            const client = new MongoClient(mongoConnectionString)
            await client.connect()
            const db = client.db(mongoDbmane)

            this.client = client
            this.db = db

            return { text: 'Connected to the database', db}
        }
        catch(error){
            return{ text: 'Error connecting to the database', error}
        }
    }
}