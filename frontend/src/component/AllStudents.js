import React,{useState, useEffect} from "react";
import axios from "axios";
import "./Allstudent.css";
export default function AllStudents(){

    //backend eken frontend ekt data gnna widih
    const [students, setStudent] = useState([]);

    useEffect(()=>{
        function getStudent(){
            
            axios.get("http://localhost:8070/student/").then((res)=>{

                setStudent(res.data);
            }).catch((err)=>{
               
                alert(err.message);
           
            })
        }
        getStudent();
    },[])
   
    return(
        <div className="container">
        <h2>All Students</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Registration Number</th>
                    <th>Address</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {students.length > 0? (
                    students.map((student) => (
                        <tr key={student.registration_num}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.registration_num}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7">No students found</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>



);
    
}