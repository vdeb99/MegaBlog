import conf from "../src/conf/conf";
import {Client,Account,ID} from "appwrite";
 export class AuthService{
    client =new Client();
    account ;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client); 
    }
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return await this.login({email,password});
            }
            else{
                return userAccount;
            }

        }
        catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }
    }
    async getUser(){
        try{
            return await this.account.get()
        }
        catch(error){
            console.log("Appwrite serive :: getUser :: error", error);
        }
        return null;
    }
    async logout() {
        try {
            await this.account.deleteSession("current");
            return { success: true };
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }
    
    

 }
 const authService=new AuthService();
 export default authService;