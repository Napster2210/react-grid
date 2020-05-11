import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'partner'],
    default: 'partner'
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
}, { timestamps: true });

const User = mongoose.model('users', userSchema, 'users');
export default User;