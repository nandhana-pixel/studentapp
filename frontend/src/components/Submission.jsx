import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// parent component to child components data tranfer we use props
const Submission = (props) => {
  var location = useLocation();
  console.log("loc", location.state);

  var navigate = useNavigate()
  var[inp,setInp] = useState({name:"", age:"", course:"", place:""});
  useEffect(() => {
    if (location.state!== null) {
      setInp({...inp, name: location.state.name, age: location.state.age, course: location.state.course, place: location.state.place});
    } 
  }, [])
  const inputHandler = (e) => {
    setInp({...inp, [e.target.name]: e.target.value});
    console.log(inp);
  };
  const submitHandler = () => {
    if(location.state !== null){
      axios.put(`http://localhost:3005/${location.state._id}`, inp)
      .then((res) => {
        console.log(res)
        alert(res.data);
        navigate('/s')
      })
      .catch((err) => {
        console.log(err);
      });
    }
  else{ 
    axios
      .post("http://localhost:3005/",inp)
      .then((res) => {
      console.log(res);
      alert(res.data)
     navigate('/')
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
  return (
    <div>
        <Typography variant='h4'>Welcome to student portal</Typography>
      <TextField variant="outlined" label="Name" name="name" value={inp.name} onChange={inputHandler}/>
      <br /><br />
      <TextField variant="outlined" label="Age" name="age" value={inp.age} onChange={inputHandler}/>
      <br /><br />
      <TextField variant="outlined" label="course" name="course" value={inp.course} onChange={inputHandler}/>
      <br /><br />
      <TextField variant="outlined" label="place" name="place" value={inp.place} onChange={inputHandler}/>
      <br /><br />
      <Button variant='contained' onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default Submission
