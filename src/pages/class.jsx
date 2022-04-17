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
  
  
 const CLass  =()=>{
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
            <StyledTableCell align="center">Section</StyledTableCell>
            
            <StyledTableCell align="center">Subject</StyledTableCell>
            <StyledTableCell align="center">Grades</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users&&users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="center">{user.class.Grades}</StyledTableCell>
              <StyledTableCell align="center">{user.class.Subject+""}</StyledTableCell>
              <StyledTableCell align="center">{user.class.Section}</StyledTableCell>
              
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </div>
     )
 }

export default CLass