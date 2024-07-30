import React, {useState} from 'react';
import axios from "axios";

export  default function Addstudent(){
   
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [registration_num, setRegistration_num] = useState("");
    const [address, setAddress] = useState("");

    function sendData(event){
        event.preventDefault();
        
        const newStudent ={
            name,
            age,
            gender,
            registration_num,
            address
        }
        
        //axios packge ek use krl post method eken parameters tika backend ekt ywnw
        axios.post("http://localhost:8070/student/add",newStudent)
        .then(()=>{
            alert("student added")
            
 
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div>
             <div className="container">
                
            <form onSubmit={sendData}>
               
            <div className="form-group">
                <label for="name"> Student name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter student Name"
                 onChange={(event)=>{
                    setName(event.target.value)
                }}/>
            </div>

            <div className="form-group">
                <label for="age"> Student age</label>
                <input type="text" className="form-control" id="age" placeholder="Enter student age"
                     onChange={(event)=>{
                         setAge(event.target.value)
                }}/>

            </div>

            <div className="form-group">
                <label for="gender"> Student gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter student gender "
                onChange={(event)=>{
                    setGender(event.target.value)
                }}/>
            </div>

            <div className="form-group">
                <label for="registration_num"> Student registernumber</label>
                <input type="text" className="form-control" id="registration_num" placeholder="Enter student registernumber"
                onChange={(event)=>{
                    setRegistration_num(event.target.value)
                }}/>
            </div>


            <div className="form-group">
                <label for="address"> Student Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter student address"
               
               onChange={(event)=>{
                    setAddress(event.target.value)
                }}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
           
            </form>
            </div>
        </div>

    )
}
