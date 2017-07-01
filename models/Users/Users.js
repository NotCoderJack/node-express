'use strict'
/*
* Model for Mongoose , just a demo
*/
import mongoose from 'mongoose'
const Scheme = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    password: String,
    id: Number
});

userSchema.index({id: 1});

// CRUD
userSchema.statics = {
    findAll: async function() {
        try {
            const data = await this.find();
            if (!data) {
                throw new Error('未找到数据');
            } else {
                return data;
            }
        } catch(err) {
            throw new Error(err);
        }
    },
    findById: async function(id) {
        try{
    		const data = await this.findOne({id});
    		if (!data) {
    			throw new Error('未找到当前餐馆的评论数据');
    		}else{
    			return data
    		}
    	}catch(err){
    		console.log('初始化评论数据失败');
    		throw new Error(err)
    	}
    }
}

const User = mongoose.modal('User', userSchema);
export default User;
