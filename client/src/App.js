import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import  Paper  from '@material-ui/core/Paper';
import  Table  from '@material-ui/core/Table';
import  TableHead  from '@material-ui/core/TableHead';
import  TableBody  from '@material-ui/core/TableBody';
import  TableRow  from '@material-ui/core/TableRow';
import  TableCell  from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles =theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const customers =[
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '최수혁',
  'birthday': '871129',
  'gender': '남자',
  'job':'백수'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '901023',
  'gender': '남자',
  'job':'직장인'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '나애리',
  'birthday': '960729',
  'gender': '여자',
  'job':'대학생'
},
]

class App extends Component {
  render (){
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>번호</StyledTableCell>
              <StyledTableCell>이미지</StyledTableCell>
              <StyledTableCell>이름</StyledTableCell>
              <StyledTableCell>생년월일</StyledTableCell>
              <StyledTableCell>성별</StyledTableCell>
              <StyledTableCell>직업</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id} //map을 사용할때는 key를 설정해줘야 오류가 없다. 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
          </TableBody>
        </Table>
      </Paper> //Paper -> Table -> TableHead (-> TableCell) -> TableBody
    )
  }
}

export default withStyles(styles)(App);
