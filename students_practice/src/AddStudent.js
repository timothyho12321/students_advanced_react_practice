import React, { useContext, useState } from 'react';
import StudentContext from './StudentContext';


export default function AddStudent() {

    const context = useContext(StudentContext);

    const [studentForm, setStudentForm] = useState(
        {
            student_number: "",
            year_of_study: "",
            gender: "",
            graduated: ""

        }
    )

    const updateFormField = (event) => {
        setStudentForm({
            ...studentForm,
            [event.target.name]: event.target.value
        })

    }

    const submitForm = () => {

        let newStudent = {
            ...studentForm
        }
        // console.log(newStudent)

        context.addStudent(newStudent)


    }

    return (
        <React.Fragment>

            <h2>Add a new student</h2>

            <div>
                <label>Student Number</label>
                <input type="text"
                    value={studentForm.student_number}
                    name="student_number"
                    onChange={updateFormField}
                />

            </div>
            <div>
                <label> year_of_study</label>
                <input type="text"
                    value={studentForm.year_of_study}
                    name="year_of_study"
                    onChange={updateFormField}
                />
            </div>
            <div>
                <label>gender</label>
                <input type="text"
                    value={studentForm.gender}
                    name="gender"
                    onChange={updateFormField}
                />
            </div>
            <div>
                <label>graduated</label>
                <input type="text"
                    value={studentForm.graduated}
                    name="graduated"
                    onChange={updateFormField}
                />
            </div>

            <button onClick={submitForm}
            >Submit new student</button>
        </React.Fragment>
    )

}

