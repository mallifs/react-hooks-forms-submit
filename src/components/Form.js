import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData,setSumbmittefData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [errors,setErrors] = useState([])
  

  function handleSubmit(event){
    event.preventDefualt();
    if(firstName.length > 0){
    const formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
    };
  //     firstName:firstName,
  //     lastName:lastName,
  //   };
  //   props.sendFormDataSomewhere(formData)
  //   setFirstName("");
  //   setLastName("");
  const dataArray = [...submittedData,formData];
    setSumbmittefData(dataArray);
    setErrors([])
  }else{
    setErrors(["First name is required!"])
  }
    props.sendFormDataSomewhere(formData);
   }
   const listOfSubmission = submittedData.map((Data,index)=>{
    return(
      <div key={index}>
        {Data.firstName} {Data.lastName}
      </div>
    )
   })



  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error,index)=>(
        <p key={index} style={{color:"red"}}>{error}</p>


      ))
      : null
    }
    <h3>submissions</h3>
    {listOfSubmission}
    </div>
    


  );
}

export default Form;
