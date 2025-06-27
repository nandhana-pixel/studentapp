import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  var navigate = useNavigate()
  var[stu,setStu]=useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:3005/")
    .then((res)=>{
      console.log(res)
      setStu(res.data)
    })
    .catch((err)=>{
      console.log(err)
    });
  },[]);
  const delstu=(id)=>{
    console.log(id);
    axios
    .delete(`http://localhost:3005/${id}`)
    .then((res) => {
      console.log(res);
      alert(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  };
  const updateStu=(val)=>{
    console.log("val",val);
    navigate('/s', {state:val});
  };
 
  return (
    <div>
      <Typography variant='h3'> Home </Typography><br /><br />
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                     <TableCell>name </TableCell>
                      <TableCell>age</TableCell>
                       <TableCell>course</TableCell>
                        <TableCell>place</TableCell>
                        <TableCell>actions</TableCell>
            </TableRow>
      </TableHead>
      <TableBody>
       {stu.map((val,i)=>{
                return(
                  <TableRow key={i}>
                    <TableCell>{val.name}</TableCell>
                     <TableCell>{val.age}</TableCell>
                     <TableCell>{val.course}</TableCell>
                      <TableCell>{val.place}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="error" onClick={()=>{delstu(val._id)}}>remove</Button>&nbsp;&nbsp;
                         <Button variant="contained" color="success"
                          onClick={() => {updateStu(val)}}>edit</Button>
                      </TableCell>
                  </TableRow>
                )
               })}
      </TableBody>

        </Table>
       
      </TableContainer>
      
      
    </div>
  )
}

export default Home