import './App.css';
import React,{ useState,useEffect }  from 'react';
import {Button,Form} from 'react-bootstrap'
import styles from './styles/table.css'

const getData=()=>{
  const data = localStorage.getItem('input');
  if(data){
    return JSON.parse(data);
  }
}
export const App =()=> {
  const [input,setInput] = useState(getData());
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [male,setMale] = useState('');
  const [female,setFemale] = useState('');
  const [experiance,setExperiance] = useState('');
  const [agree,setAgree] = useState('');
  
  const additem =(e) =>{
    e.preventDefault()
    let item={
      name,
      email,
      male,
      female,
      experiance,
      agree
    }
    setInput([...input,item]);
    setName('');
    setEmail('');
    setMale('');
    setFemale('');
    setAgree('');
  }

  const edit =(name,email)=>{
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
  }

  const deleteitem =(name)=>{
    var index = input.map(function(e){
      return e.name
    }).indexOf(name);
    input.splice(index,1);
  }

 useEffect(()=>{
  localStorage.setItem('input',JSON.stringify(input));
 },[input])

return(
<div>
<div>
  <Form onSubmit={additem}><h1>Register Form</h1>
<div>
 <label for="name">Name</label> <input type="text" id="name" placeholder='Niraj' 
  onChange={(e) => setName(e.target.value)} value={name}/><br/>
 <label for="email">Email</label> <input type="text" id="email" placeholder='abc@gmail.com' 
  onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
 <label for="gender">Gender</label>  <br/> 
 <input type="radio" id="male" onSelect={(e)=> setMale(e.target.value)} value={male}/> <label for="male">Male</label>
 <input type="radio" id="female" onSelect={(e) => setFemale(e.target.value)} value={female}/> <label for="female">Female</label> <br/>
 <label id="experiance" onChange={(e) => setExperiance(e.target.value)} value={experiance}>Experiance</label> <br/>
  <select>
      <option value = "0" selected>0</option>
      <option value = "1-3">1-3</option>
      <option value = "3+">3+</option>
  </select> <br/>
  <input type="checkbox" id="agree" onChange={(e) => setAgree(e.target.value)} value={agree}/> <label for="agree">Agree with Term and Condition </label> <br/>
<Button type="submit">SUBMIT</Button>
</div>
</Form>
</div>


<div className={styles.table}>
<table>
 <thread>
 <tr>
 <th>name</th>
 <th>email</th>
 <th>gender</th>
 <th>experiance</th>
 <th>agree</th>
 </tr>
 </thread> 
 <tbody>
   {input.map((item) =>{
    return(
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.male}</td>
        <td>{item.female}</td>
        <td>{item.agree}</td>
        <td><Button onClick={() => edit(item.name)}>Edit</Button></td>
        <td><Button onClick={() => deleteitem(item.name)}>Delete</Button></td>
      </tr>
    )
   })}
 </tbody>
 </table>
</div>
</div>
)
}

export default App