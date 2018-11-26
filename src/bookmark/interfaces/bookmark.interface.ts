import { Document } from 'mongoose';

export interface Bookmark extends Document {
    readonly name: string;
    readonly url: string;
    readonly description: string;
    readonly userId: string;
}