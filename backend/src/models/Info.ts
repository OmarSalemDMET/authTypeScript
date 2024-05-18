import mongoose, { Document, Schema } from "mongoose";

export interface MyInfo extends Document {
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: Date;
    national_ID: string;
    marital_status: string;
    mobile_number: string;
    academic_degree: string;
    job_title: string;
    address: string;
    telephone: string;
    NofamilyMem: number;
}

const infoSchema = new Schema<MyInfo>({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    national_ID: {
        type: String,
        required: true,
    },
    marital_status: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
    },
    academic_degree: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    NofamilyMem: {
        type: Number,
        required: true,
    },
});

const Info = mongoose.model<MyInfo>("Info", infoSchema);

export default Info;
