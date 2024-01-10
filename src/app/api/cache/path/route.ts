import { revalidatePath} from "next/cache";
import { env } from "process";
export  async function POST(request:Request){
    const body= await request.json()
    const {path,token}=body;

    if(!path|| !token){
        return Response.json({
            error:"tag is required"
        },{status:400})
    }
    if(token!==env.CACHE_TOKEN){
        return Response.json({
            error:"token is invalid"
        },{status:401})
    }
       revalidatePath(path)
       return Response.json({success:true})
 
 
    }
