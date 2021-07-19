import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

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
    return(
      <div>
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
      </div>
    )
  }
}

export default App;
