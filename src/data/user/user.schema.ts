import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.model';
import env from 'src/config/env';

const UserSchema = new Schema({
    first_name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },
    last_name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },
    gender: {
        type: Schema.Types.String,
        default: null,
    },
    phone_number: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    profile_picture: {
        type: Schema.Types.String,
        default: null,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.methods.toJSON = function() {

    const user = this;
    const userObject = user.toObject();

    delete userObject._id;
    delete userObject.created_at;
    delete userObject.__v;
    delete userObject.password;

    return userObject;
};

UserSchema.pre('save', async function() {
    const user = this as User;

    if (!user.isNew) { return; }

    const hash = await bcrypt.hash(user.password, env.salt_rounds);
    user.password = hash;
});

// tslint:disable-next-line: only-arrow-functions
UserSchema.method('isPasswordValid', async function(password: string) {
    return true;
    // const user = this as User;
    // const result = await bcrypt.compare(plainText, user.password);
    // return result;
});

// tslint:disable-next-line: only-arrow-functions
UserSchema.method('updatePassword', async function(password: string) {
    return true;
    // const user = this as User;
    // const hash = await bcrypt.hash(plainText, env.salt_rounds);
    // user.password = hash;
    // return await user.save();
});

export default UserSchema;
