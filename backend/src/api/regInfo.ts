import { Response, Request } from "express";
import Info from "../models/Info";

const registerInfo = async (req: Request, res: Response) => {
    try {
        const { first_name, last_name, gender, date_of_birth, national_ID, marital_status, mobile_number, academic_degree, job_title, address, telephone, NofamilyMem } = req.body;

        const InfoExists = await Info.findOne({ national_ID });
        if (InfoExists) {
            return res.status(400).json({ message: "The Info is already registered!" });
        }

        const MyInfo = await Info.create({
            first_name,
            last_name,
            gender,
            date_of_birth,
            national_ID,
            marital_status,
            mobile_number,
            academic_degree,
            job_title,
            address,
            telephone,
            NofamilyMem,
        });

        if (MyInfo) {
            res.status(201).json({
                first_name: MyInfo.first_name,
                last_name: MyInfo.last_name,
                gender: MyInfo.gender,
                date_of_birth: MyInfo.date_of_birth,
                national_ID: MyInfo.national_ID,
                marital_status: MyInfo.marital_status,
                mobile_number: MyInfo.mobile_number,
                academic_degree: MyInfo.academic_degree,
                job_title: MyInfo.job_title,
                address: MyInfo.address,
                telephone: MyInfo.telephone,
                NofamilyMem: MyInfo.NofamilyMem,
            });
        } else {
            res.status(400).json({ message: "An error occurred in creating the user" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const displayInfo = async (req: Request, res: Response) => {
    try {
        const { national_ID } = req.body;
        const InfoExists = await Info.findOne({ national_ID });

        if (InfoExists) {
            res.status(200).json(InfoExists);
        } else {
            res.status(400).json({ message: "National ID is not correct" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const getMarriedInfo = async ( req :Request, res :Response) => {
    try{
        const MarriedCouples = await Info.find({marital_status: "Married"});

        if (MarriedCouples){
            res.status(200).json(MarriedCouples)
        }else{
            res.status(400).json({message : "There are no married couples"})
        }
    }catch(error){
        res.status(500).json({message : "Server error : ", error})
    }  
}

export { registerInfo, displayInfo, getMarriedInfo};