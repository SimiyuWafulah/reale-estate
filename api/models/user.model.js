import express from 'express'
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User