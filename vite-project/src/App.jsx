import React from 'react'

const App = () => {
    
  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')

  // localStorage.setItem('user', 'shoaib')
  // localStorage.setItem('age', '24')

  // const data = {
  //   user: 'shoaib',
  //   age: 23,
  //   gender: 'male'
  // }
  // localStorage.setItem('data', JSON.stringify(data))
  // localStorage.getItem(JSON.parse(data))

  // const data = JSON.parse(localStorage.getItem('data'))
  // console.log(data)

  localStorage.setItem('name', 'shoaib')
  localStorage.setItem('age', 23)
  const user = localStorage.getItem('user')
  console.log(user)

  const person = {
    name: 'shoaib',
    age: 23,
    city: 'Peshawar'
  }
  localStorage.setItem('person', JSON.stringify(person))
  const data = JSON.parse(localStorage.getItem('data'))
  console.log(data)
  


  



  
  

  return (
    <div>
     <h1>local storage</h1>
    </div>
  )
}

export default App
