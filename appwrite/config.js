import conf from "../conf/conf.js";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class ChatService {
    client;
    databases;
    bucket;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProject);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Chat Functionality

    async sendMessage(chatId, message) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                chatId,
                ID.unique(),
                { message }
            );
        } catch (error) {
            console.error('ChatService: sendMessage error', error);
            // throw new Error('Failed to send message: ' + error.message);
        }
    }

    async receiveMessages(chatId) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                chatId,
                [Query.orderDesc('createdAt')]
            );
            return response.documents;
        } catch (error) {
            console.error('ChatService: receiveMessages error', error);
            // throw new Error('Failed to receive messages: ' + error.message);
        }
    }

    async deleteMessage(chatId, messageId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                chatId,
                messageId
            );
            return true;
        } catch (error) {
            console.error('ChatService: deleteMessage error', error);
            // throw new Error('Failed to delete message: ' + error.message);
        }
    }

    async editMessage(chatId, messageId, updatedMessage) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                chatId,
                messageId,
                { message: updatedMessage }
            );
        } catch (error) {
            console.error('ChatService: editMessage error', error);
            // throw new Error('Failed to edit message: ' + error.message);
        }
    }

    // Chat Room Management

    async createChatRoom(roomData) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId,
                ID.unique(),
                roomData
            );
        } catch (error) {
            console.error('ChatService: createChatRoom error', error);
            // throw new Error('Failed to create chat room: ' + error.message);
        }
    }

    async joinChatRoom(roomId, userId) {
        try {
            const room = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId,
                roomId
            );
            // Assuming the chat room has a field for members
            const members = room.members || [];
            if (!members.includes(userId)) {
                members.push(userId);
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteChatRoomsCollectionId,
                    roomId,
                    { members }
                );
            }
            return room;
        } catch (error) {
            console.error('ChatService: joinChatRoom error', error);
            // throw new Error('Failed to join chat room: ' + error.message);
        }
    }

    async leaveChatRoom(roomId, userId) {
        try {
            const room = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId,
                roomId
            );
            const members = room.members || [];
            const updatedMembers = members.filter(id => id !== userId);
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId,
                roomId,
                { members: updatedMembers }
            );
        } catch (error) {
            console.error('ChatService: leaveChatRoom error', error);
            // throw new Error('Failed to leave chat room: ' + error.message);
        }
    }

    async getChatRoomDetails(roomId) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId,
                roomId
            );
        } catch (error) {
            console.error('ChatService: getChatRoomDetails error', error);
            // throw new Error('Failed to get chat room details: ' + error.message);
        }
    }

    async listChatRooms() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId
            );
            return response.documents;
        } catch (error) {
            console.error('ChatService: listChatRooms error', error);
            // throw new Error('Failed to list chat rooms: ' + error.message);
        }
    }

    async deleteChatRoom(roomId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChatRoomsCollectionId,
                roomId
            );
            return true;
        } catch (error) {
            console.error('ChatService: deleteChatRoom error', error);
            // throw new Error('Failed to delete chat room: ' + error.message);
        }
    }

    // Real-time Updates

    async subscribeToMessages(chatId, callback) {
        try {
            const response = await this.databases.subscribe(
                conf.appwriteDatabaseId,
                chatId,
                (document) => callback(document)
            );
            return response;
        } catch (error) {
            console.error('ChatService: subscribeToMessages error', error);
            // throw new Error('Failed to subscribe to messages: ' + error.message);
        }
    }

    async unsubscribeFromMessages(subscriptionId) {
        try {
            await this.databases.unsubscribe(subscriptionId);
        } catch (error) {
            console.error('ChatService: unsubscribeFromMessages error', error);
            throw new Error('Failed to unsubscribe from messages: ' + error.message);
        }
    }

    async getAllUser () { 
        try{

           let users = await this.databases.listSessions()
            return users

        }catch{
            console.error('ChatService: getAllUser error')
            throw new Error('Failed to get all users')
        }
    }

    
    // File Management

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error('ChatService: uploadFile error', error);
            throw new Error('Failed to upload file: ' + error.message);
        }
    }

    async downloadFile(fileId) {
        try {
            return await this.bucket.getFileDownload(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error('ChatService: downloadFile error', error);
            throw new Error('Failed to download file: ' + error.message);
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error('ChatService: deleteFile error', error);
            throw new Error('Failed to delete file: ' + error.message);
        }
    }
}

const chatService = new ChatService();
export default chatService;
