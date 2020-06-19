import { Document } from 'mongoose';

export interface User extends Document {
    email: string;
    password: string;
    gender?: Gender;
    last_name: string;
    first_name: string;
    phone_number: string;
    profile_picture?: string;

    updatePassword: (password: string) => Promise<User>;
    isPasswordValid: (password: string) => Promise<boolean>;
}

export type Gender = 'male' | 'female';
