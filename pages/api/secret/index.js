import {getSession} from "next-auth/client";

export default async (req,res) => {
    const session = await getSession({req})

    if(session){
        // console.log(session)
        res.send({
            content: "welcome to secret page"
        })
    }else{
        res.send({
            error: "No access"
        })
    }
}