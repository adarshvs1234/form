import { useState } from "react";


function App() {
  const [form,setForm] = useState({
    Firstname:"",
    Surname:"",
    Email:"",
    Password:""

  })


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(form);
    
  }
  
const styles = {
  
  heading:{
    color :"rgb(8, 102, 255)",
    textAlign: "center"
  },
heading2:{

  color:"#1c1e21"
},

textbox:{
display:"flex",
flexDirection: "row"

},

radioBorder:{

  border: '1px solid black' 
},
  radioButton:{
    display:"flex",
    flexdirection:"row",
    alignitems:"center"
  }
}

  return (
    <div className="App  text-centerr">
      <div className="border-2  border-white bg-color-grey">
      <form onSubmit={handleSubmit} >
        <div style={styles.heading}>
       <label >facebook</label>
       <br/>

      <div style={styles.heading2}  >
      <label> Create a new account</label>
     <br/>  
     </div>

     <div className="text-[#606770]">
      <label> It's quick and easy.</label>
      </div>
      </div>

      <br/>
       <div className="flex">

      <div className="flex-auto">
        <input
         type="text"
         placeholder="First name"
         value={form.name}
         onChange={(e)=>setForm({...FormData,Firstname:e.target.value})}
         required
         />
     
     </div>
          

          <div className="flex-auto">
        <input
         type="text"
         placeholder="Surname"
         value={form.name}
         onChange={(e)=>setForm({...FormData,Surname:e.target.value})}
         required
         />
         </div>
         
</div>

      <label>Date of Birth</label>
      <br/>
      <br/>
     
      <label>Gender:</label>
      <div style={styles.radioButton}>
    <div className="flex">

    <div className="border-2">
    
    <div className="flex-auto">
    <label>Male</label>
    <input type="radio"/>
    </div>
    </div>
    

    <div className="flex-auto">
     <div className="border-2">
      <label>Female</label>
      <input type="radio"/>
      </div>
      </div>


      <div className="flex-auto">
     <div className="border-2">
      <label>Custom</label>
      <input type="radio"/>
      </div>
      </div>
      </div>
      <br/>
      <br/>
      </div>
      
      <input type="emailaddress"  placeholder=" Email address " required></input>
      <br/>
      <br/>
       <input type="password"  placeholder="New password" required></input>
       <br/>
      
       <button type="submit"  className="border-1 bg-[#00a400]  text-[#fff]  border-radius:6px" >Sign Up</button>
       <br/>
       <label>Already have an account?</label>
      </form>
      </div>
      </div>
  
  );
}

export default App;
