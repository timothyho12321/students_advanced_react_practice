import React, { useState } from 'react';
import AddStudent from './AddStudent';
import StudentContext from './StudentContext';
import StudentList from './StudentList';


function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      student_number: "ABC001",
      year_of_study: 1,
      gender: "m",
      graduated: "false"
    },
    {
      id: 2,
      student_number: "ABC002",
      year_of_study: 2,
      gender: "f",
      graduated: "false"
    },
    {
      id: 3,
      student_number: "ABC003",
      year_of_study: 3,
      gender: "m",
      graduated: "true"
    },
    {
      id: 4,
      student_number: "ABC004",
      year_of_study: 3,
      gender: "f",
      graduated: "true"
    }
  ])

  const context = {
    getStudents: () => {
      return students;

    },

    addStudent: (newStudent) => {
      setStudents([...students,
        newStudent])


    },

    deleteStudent: (number) => {

      console.log("student number", number)
      // console.log(students);
      let indexToDelete = students.findIndex(s => s.student_number === number)
      // console.log(indexToDelete);
      setStudents([...students.slice(0, indexToDelete), ...students.slice(indexToDelete + 1)])

    }

  }


  return (
    <React.Fragment>

      <StudentContext.Provider value={context}>
        <StudentList />

        <AddStudent />

      </StudentContext.Provider>

    </React.Fragment>
  );
}

export default App;
