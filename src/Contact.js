import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from 'antd';
import "./Contact.css";

const Contactvalidation = yup.object().shape({
    name: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
});

const Contact = () => {
    const { Title } = Typography;
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(Contactvalidation)
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        
            <Title level={2}>Contact Us</Title>
            <div>
                <label>Name</label>
                <input {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
                <label>Subject</label>
                <input {...register("subject")} />
                {errors.subject && <p>{errors.subject.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Description</label>
                <input {...register("description")} />
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <input type="submit" />
        </form>
    );
}

export default Contact
