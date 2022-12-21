import React, { useState } from 'react';


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
      year_of_study:3,
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



  return (
    <React.Fragment>



    </React.Fragment>
  );
}

export default App;
