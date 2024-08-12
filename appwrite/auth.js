import conf from "../conf/conf.js";
import { Client, Account, ID, Databases } from "appwrite";

export class AuthService {
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProject);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        console.log("AuthService initialized with endpoint:", conf.appwriteUrl);
    }

    async createAccount({ name, email, password }) {
        try {
            // Check for an existing session
            const sessions = await this.account.listSessions();
            
            if (sessions.total > 0) {
                console.log("Session found, attempting to login...");
                return this.login({ email, password });
            }

            // Create an account if no session exists
            console.log("Creating account...");
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            if (userAccount) {
                console.log("Account created, attempting login...");
                return this.login({ email, password });
            }

            return userAccount;
        } catch (error) {
            console.error("Failed to create account:", error);
            throw error; // Rethrow to allow the calling code to handle the error
        }
    }

    async login({ email, password }) {
        try {
            console.log("Attempting login...", email, password);
            const newSession = await this.account.createEmailPasswordSession(email, password);
            console.log("Login successful:", newSession);
            return newSession;
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Rethrow to allow the calling code to handle the error
        }
    }

    async getCurrentUser() {
        try {
            const sessions = await this.account.listSessions();
            if (sessions.total > 0) {
                const user = await this.account.get();
                return user;
            } else {
                console.error("No active session found");
            }
        } catch (error) {
            console.error('Failed to get current user:', error);
            throw error; // Rethrow to allow the calling code to handle the error
        }
    }

    async getAllLoggedInUsers() {
        try {
            console.log("Attempting to fetch logged-in users...");
            const users = await this.account.listSessions();
            console.log("Users fetched:", users);
            return users;
        } catch (error) {
            console.error("Error during fetching logged-in users:", error);
            throw error; // Rethrow to allow the calling code to handle the error
        }
    }

    async logout() {
        try {
            console.log('Logging out...');
            await this.account.deleteSessions();
            console.log('Logged out successfully');
        } catch (error) {
            console.error('Logout failed:', error);
            throw error; // Rethrow to allow the calling code to handle the error
        }
    }
}

const authService = new AuthService();
export default authService;
