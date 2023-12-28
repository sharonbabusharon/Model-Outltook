



import { MongoClient } from "mongodb";


const mongo_uri=process.env.WEBSITE_PLATFOTM_USERDATA_MONGODB_URI ||"mongodb+srv://api_user:mdb_atlas_user_2023@cluster0.vltxues.mongodb.net/?retryWrites=true&w=majority";
const mongo_client=new MongoClient(mongo_uri);

const database_name_base="model_outlook_database";
const data_collection_name="model_outlook_website_data";


export async function initialise_mongo_client() {
    try{
        await mongo_client.connect();
        global.logd("connected to mongodb");
    }
    catch(e){
        console.error("error connecting to mongodb",e);
    }
}

export  async function insert_model_data_info(data){
    const database=mongo_client.db(database_name_base);
    const collection=database.collection(data_collection_name);

    let insert_result=await collection.insertOne(data);;
    console.log(`document inserted: ${insert_result.insertedId} :`, insert_result)

    return true;
}

