import React, { useEffect, useState } from 'react'
import { database } from '../config/firebase-config';
import { onValue, ref } from 'firebase/database';
import '../App.css'

export const Recipients_List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const database_ref = ref(database, "Recipient/");
        onValue(database_ref, (snapshot) => {
            const data = snapshot.val();

            const convert_to_array = Object.values(data);
            setData(convert_to_array);
            console.log(convert_to_array)
        });
    }, [])
    return (
        <>
            <div style={{ textAlign: 'center', backgroundColor: 'aliceblue' }}>
                <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Recipients List</h1>
                <div className="card-container">
                    {data.map((pro, i) => {
                        const { First_Name, Number, Email, Blood_group, Last_Name, User_Name } = pro
                        return (<>
                            <div key={i} className="card ">
                                <div className="card-content">
                                    <h3 className="card-title text-center"> First_Name : {First_Name}</h3><br />
                                    <h3 className="card-title text-center"> Last_Name : {Last_Name}</h3><br />
                                    <h3 className="card-title text-center"> User_Name : {User_Name}</h3><br />
                                    <h3 className="card-title text-center"> Blood_group : {Blood_group} </h3><br />
                                    <h3 className="card-title text-center"> Conatct Number : {Number} </h3><br />
                                    <h3 className="card-title text-center"> Email : {Email} </h3><br />
                                </div>
                            </div>
                        </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

