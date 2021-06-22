export interface Message {
    id: number;
    senderId: number;
    senderUsername: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientUserName: string;
    recipientPhotoUrl: string;
    dateRead: Date;
    messageSent: Date;
}