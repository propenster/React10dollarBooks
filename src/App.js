import React , { Component } from 'react';
import Table from './components/Table';
class App extends Component {
state = { 
books: require("assets/booksJson.json"),
users: [ {name:"Admin1", email:"admin@example.com"},
{name:"Store Keeper", email:"stkp@example.com"},
{name:"Faith", email:"propenster@github.io"}

]

}
render(){ 
const {booksData} = this.state.books
const {usersData} = this.state.users

return (
<div className="container ">
<div className=" row">
<Navigation />
<Header usersData={usersData} />
<MainBody booksData={ booksData }  />
</div>
</div>

)

}

}
}

export default App
