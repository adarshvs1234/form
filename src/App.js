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
    <div className="App flex justify-center items-center  border-4 border-black p-5 w-30 h-30">
      <div className="border-4  border-white bg-color-black ">
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
   <select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21" selected="1">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
   </select>

   <select>
    <option>Jan</option>
    <option>Feb</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>Aug</option>
    <option>Sep</option>
    <option>Oct</option>
    <option>Nov</option>
    <option selected="2">Dec</option>
   </select>

   <select>
    <option></option>
   </select>

   <br/>
   <br/>  
      <label>Gender:</label>
      <div style={styles.radioButton}>
    <div className="flex">

    <div className="border-2"  >
    
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
      
       <button type="submit"  className="box-border h-15 w-60 p-18  border-1 bg-[#00a400]  text-[#fff]  rounded" >Sign Up</button>
       <br/>
       <label>Already have an account?</label>
      </form>
      </div>
      </div>
  
  );
}

export default App;
