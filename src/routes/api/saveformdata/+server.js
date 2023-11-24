
import path from "path";
import fs from "fs-extra";
import shortid from 'shortid';
import { json } from '@sveltejs/kit';

shortid.characters(
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
  );


export async function POST({ request }) {



    let Data = await request.json();
	const unique_id = shortid.generate();
	console.log(unique_id)
    console.log(Data)
    let folder_address = path.join(global.server_info.directories.model_data,Data.firstname.replace(/[/\\?%*:|"<>]/g, '-'));
	console.log(folder_address)
    await fs.mkdirp(path.join(folder_address));
    let file_address = path.join(folder_address, unique_id + ".json");
	console.log(file_address)
    Data = JSON.parse(JSON.stringify(Data)); 
    await fs.writeJson(file_address, Data, { spaces: 2 });

	return json({success:true});
}






