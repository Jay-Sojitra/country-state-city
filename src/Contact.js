import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";
import { Typography } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./Contact.css";

const Contactvalidation = yup.object().shape({
    name: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
});

const Contact = () => {
    const { Title } = Typography;
    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(Contactvalidation)
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Title level={2}>Contact Us</Title>
            <label>Name</label>
            <Controller
                render={({ field }) => <AntdInput {...field} />}
                name="name"
                control={control}
                defaultValue=""
            />
            {errors.name && <p>{errors.name.message}</p>}
            <label>Subject</label>
            <Controller
                render={({ field }) => <AntdInput {...field} />}
                name="subject"
                control={control}
                defaultValue=""
            />
            {errors.subject && <p>{errors.subject.message}</p>}
            <label>Email</label>
            <Controller
                render={({ field }) => <AntdInput {...field} />}
                name="email"
                control={control}
                defaultValue=""
            />
             {errors.email && <p>{errors.email.message}</p>}
            <label>Description</label>
            <Controller
                render={({ field }) => <AntdInput {...field} />}
                name="description"
                control={control}
                defaultValue=""
            />


            <input type="submit" />
        </form>
    );
};


export default Contact
