import React, { useState } from 'react'
import Input_Field from '../components/Input_Field';
import { useNavigate } from 'react-router-dom';
import { database } from "../config/firebase-config";
import { child, push, ref, set } from 'firebase/database';
import Swal from 'sweetalert2';
export const Donor = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const change_handle = (e) => {
        const { value, id } = e.target;
        setData({ ...data, [id]: value });
    };
    const submit_handle = (e) => {
        e.preventDefault();
    }
    const Response_Record = () => {
        Swal.fire({
            title: "Thank,s Your Response has been Recorded ",
            confirmButtonText: 'OK',
            icon: 'success',
            confirmButtonColor: 'blue',
            background: 'black',
            color: 'white'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/Homepage')
            }
        });
    }
    const Database_submit_handle = () => {
        const new_message_key = push(child(ref(database), "Donor")).key;
        set(ref(database, `Donor/${new_message_key}`), {
            First_Name: data.first_name,
            Last_Name: data.last_name,
            User_Name: data.username,
            Blood_group: data.bloodgroup,
            Email: data.email,
            Number: data.phone_number,
            key: new_message_key,
        }).then((res) => {
            Response_Record()
        });
    }
    return (
        <div className="bg-inherit BackGroundColor	 h-[100dvh] grid place-items-center px-3">
            <form
                onSubmit={submit_handle}
                className="bg-transparent Borders rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
            >
                <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
                    <h1>For Donors</h1>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <Input_Field
                        id="first_name"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="First Name"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <Input_Field
                        id="last_name"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="Last Name"
                    />
                </div>

                <div className="col-span-2">
                    <Input_Field
                        id="username"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="Username"
                    />
                </div>
                <div className="col-span-2">
                    <Input_Field
                        id="bloodgroup"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="Enter Your Blood Group"
                    />
                </div>
                <div className="col-span-2">
                    <Input_Field
                        id="phone_number"
                        type="number"
                        required={true}
                        onChange={change_handle}
                        placeholder="Phone Number"
                    />
                </div>
                <div className="col-span-2">
                    <Input_Field
                        id="email"
                        type="email"
                        required={true}
                        onChange={change_handle}
                        placeholder="Email Address"
                    />
                </div>
                {/* <button onClick={CheckData}>CheckData</button> */}
                <div className="col-span-2">
                    <button className='bg-slate-900	 w-full py-3 text-white font-bold rounded-md' onClick={Database_submit_handle} type='submit'>Donate</button>
                </div>

            </form>
        </div>
    );


































}