import {json} from "@sveltejs/kit";



export async function GET(req) {
    return json({ result: {}, success: true });
}


