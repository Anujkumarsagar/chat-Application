import { Client, Account } from "appwrite";
import conf from "../conf/conf.js";

const client = new Client()
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProject); // Your project ID

const account = new Account(client);


const result = await account.listSessions();

console.log(result);
export default result;