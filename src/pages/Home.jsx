// import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";
//  import * as React from 'react';
import { styled} from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell ,{tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux"
import {deleteUser, loadUsers } from "../redux/action";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 10,
    },
  }));
  
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));
  
  
 const Home  =()=>{
    let navigate = useNavigate()
    let dispatch =useDispatch()
    const {users}  = useSelector(state=>state.data)
    useEffect(()=>{
        dispatch(loadUsers())
    },[]);
    const handleDelete=(id)=>{
        if(window.confirm('are you sure')){
          dispatch(deleteUser(id))
        }
      }

     return (
         <div>
             <ButtonGroup variant="contained" aria-label="outlined primary button group">
             <Button onClick={()=>navigate(`/register`)}>Admin</Button>
               </ButtonGroup>
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id </StyledTableCell>
            <StyledTableCell align="center">Teacher Name</StyledTableCell>
            
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
            <StyledTableCell align="center">Show more deatils</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users&&users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="center">{user.name}</StyledTableCell>
              <StyledTableCell align="center">{user.age}</StyledTableCell>
              <StyledTableCell align="center">{user.Gender}</StyledTableCell>
              <StyledTableCell align="center">{user.class.Subject.length}</StyledTableCell>
              
              <StyledTableCell align="center">
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
               {/* <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
               <Button onClick={()=>navigate(`/edit-city/${user.id}`)}>Edit</Button> */}
               <Button style={{"color":"red",
               "backgroundColor":"yellow"}} onClick={()=>navigate(`/class`)}>More Info</Button>
               </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </div>
     )
 }

export default Home