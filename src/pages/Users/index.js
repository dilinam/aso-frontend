import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Users(props){

    const createData =(name, password, rollId, tenetId) => {
        return { name, password, rollId, tenetId };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
      ];

    return (
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>name</TableCell>
                        <TableCell align='center'>password</TableCell>
                        <TableCell align='center'>rollId</TableCell>
                        <TableCell align='center'>tenetId</TableCell>
                        <TableCell align='center'>settings</TableCell>
                    </TableRow>
                </TableHead> 
                <TableBody>
                    
                </TableBody>
            </Table>

            </TableContainer>
        </div>
    );
}

export default Users;