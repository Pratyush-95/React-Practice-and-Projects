import React, { useState } from 'react'

function App ()  {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // function firstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function lastNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }


  const[formData, setFormData] = useState({ firstName:"", lastName: "", 
    email:"", comments:"", isVisible:true, mode:"", favCar:""})
  // console.log(formData.email);
  console.log(formData)
  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        // [event.target.name] : event.target.value
        [name] : type ==='checkbox' ? checked : value
    };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    // console.log(formData);
    
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='first name' 
        onChange={changeHandler}
        name= "firstName"
        value={formData.firstName}
        />

        <br/>
        
        <input type="text" 
        placeholder='last name' 
        onChange={changeHandler}
        name= "lastName"
        value={formData.lastName}
        />
        <br />

        <input type="email" 
        placeholder='Enter your email id'
        onChange={changeHandler}
        name= "email"
        value={formData.email} // isse hmm iske anadr ke data ko nikal rahe hai
        />

        <br />

        <textarea
        placeholder='Enter your comments'
        onChange={changeHandler}
        name="comments"
        value={formData.comments}
        />

        <br />

        <input type="checkbox" 
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}  //isse hmm iske anadr ke data ko nikal rahe hai ki box checked hai ya nhi
        />
        <label htmlFor="isVisible">Am I Visible ?</label>

        <fieldset>
          <legend >Mode:</legend>

          <br />

        <input type="radio" 
        onChange={changeHandler}
        name="mode"
        value="Online-Mode"
        id='Online-Mode'
        checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online Mode</label>

        <input type="radio" 
        onChange={changeHandler}
        name="mode"
        value="Offline-Mode"
        id='Offline-Mode'
        checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offine Mode</label>

        </fieldset>

        <label htmlFor="favCar">Tell me your Favourite Car</label>

        <select
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
        >

        <option value="scarpio">Scarpio</option>
        <option value="xuv300">Xuv300</option>
        <option value="creta">Creta</option>
        <option value="swift">Swift</option>
        <option value="bmw">BMW</option>

      </select>

      <br />
      <br />

      {/* <input type="submit" value='submit'/> */}

      <button>Submit</button>

      </form>
    </div>
  )
}

export default App
