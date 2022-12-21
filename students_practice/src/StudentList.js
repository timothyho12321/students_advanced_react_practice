import React, { useContext } from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {

    const context = useContext(StudentContext)

    const getStudentTry = () => { console.log(context.getStudents()) }

    // const submitDelete = (s.student_number)=>{
    //     console.log("delete button value", s.student_number)
    //     context.deleteStudent
    // }

   

    return (
        <React.Fragment>

            <ol>
                {context.getStudents().map(s =>

                (<React.Fragment>
                    <li key={s.id}>

                        <div>Student Number: {s.student_number}</div>
                        <div>Years of Study: {s.year_of_study}</div>
                        <div>Gender: {s.gender}</div>
                        <div>Gender: {s.graduated}</div>

                    </li>
                    <button onClick={()=>{context.deleteStudent(s.student_number)}}
                           
                    >Delete this student</button>


                </React.Fragment>

                )
                )}


            </ol>

        </React.Fragment>
    )


}