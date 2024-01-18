import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: 'user123',
  email: 'user@example.com',
  password: 'hashed_password',
  settings: {
    theme: 'light',
    customization: {
      // Additional user preferences
    },
  },
});

export default mongoose.model('User', UserSchema);
