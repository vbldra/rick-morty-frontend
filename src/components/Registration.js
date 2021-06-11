import React, { useEffect, useContext, useRef } from "react";
import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, formState, handleSubmit, watch } = useForm();
    const submit = (data) => {
        // do magic here
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input
                    {...register("user", { required: true })}
                    placeholder="Username"
                ></input>
            </div>
            {formState.errors.user && <div>Username is required</div>}
            
            <div>
                <input
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Email"
                ></input>
            </div>
            {formState.errors.email && <div>Email is required</div>}
            
            <div>
                <input
                    {...register("email", {required: true, minLength: 8})}
                    type="password"
                    placeholder="Password"
                ></input>
            </div>
            {formState.errors.password && <div>Password is required</div>}

            <div>
                <input
                    {...register("password_repeat", {validate: (value) => {
                        return value === watch("password")
                    }})}
                    type="password"
                    placeholder="Repeat password"
                ></input>
            </div>
            {formState.errors.password_repeat && <div>Passwords does not match</div>}

            <input type="submit"></input>
        </form>
    );
};

export default Registration;
