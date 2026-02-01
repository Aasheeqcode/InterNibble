import {Inngest} from "inngest"
import connectDB  from "./db.js"
import User from "../models/User.js"

export const inngest=new Inngest({id:"internibble"})

const userCreated=inngest.createFunction(
    {id:"user-created"},
    {event:"clerk/user.created"},
    async({event})=>{
        await connectDB();
        const {id,first_name,last_name,email_addresses,image_url}=event.data;

        const newUser={
            clerkId:id,
            name:`${first_name&&" "}${last_name||""}`,
            email:email_addresses[0],
            profileImage:image_url
        }

        await User.create(newUser);
    }
)

const userDeleted=inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},
    async({event})=>{
        await connectDB();

        const {id}=event.data;

        await User.deleteOne({clerkId:id})
        
    }
)

export const functions=[userCreated,userDeleted]