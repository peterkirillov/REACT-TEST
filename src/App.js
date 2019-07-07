import React from "react";
import Info from "./components/Info/info";
import Form from "./components/Form/form";
import Weather from "./components/Weather/weather";
import History from "./components/History/history";
import "./components/Scrollhook/scrollhook.js";
import {Nav, Navbar, NavDropdown } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse'
import Routes from "./Routes";
import  { ApolloProvider}  from "react-apollo";
import { ApolloClient, createNetworkInterface} from "apollo-client";
import { NavLink, BrowserRouter, Link } from "react-router-dom";

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
}); 


const client = new ApolloClient({
  networkInterface: networkInterface
});


//соединения ключа с погодой
const API_KEY = "af80985adee2532d84913b8116d6f234"

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    try{
    if(city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    
    this.setState({
      temp: data.main.temp,
      city: data.name,      
      country: data.sys.country,
      error: undefined
    });
    }else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        error: "Enter the city."
      });
    }
  }
  catch(e){
    return (e);
  }
}
  

  render(){
    return(
      <ApolloProvider client = {client}>
            <BrowserRouter>
      <div>
            <Navbar collapseOnSelect variant="light" bg="light" expand="lg">
      <Navbar.Brand href="/">A U G M E N T A T I O N S</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://hitecher.com/ru/tehnologii-i-bezopasnost/the-human-beyond/">What is augmentations</Nav.Link>
          <NavDropdown title="Information" id="basic-nav-dropdown">
            <NavDropdown.Item href="#historyScroll">History</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Products</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#contacts">Contacts</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Nav>
        <div className='nav-link'><NavLink to={'/register'}   
        style={{color: "black"}}>Registeration</NavLink>
        </div>
        <div className='nav-link'><Link to={'/login'} style={{color: "black"}}>LogIn</Link>
        </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Collapse>
        <Routes />
      </Collapse>
      <div className="wrapper">
      <div className="main">
       <div className="row">
       <div className="col-sm-5 info">
       <Info />
       </div>
       <div className="col-sm-7 form">
       <Form weatherMethod={this.gettingWeather}/>
        <Weather 
        temp = {this.state.temp}
        city ={this.state.city}
        country = {this.state.country}
        error = {this.state.error}
        />
       </div>
       </div>
      </div>
      </div>
      <div id ="historyScroll">
      <div className="history">
        <History/>
        <div className="armPhoto">
        </div>
        </div>
      </div>
      <div id="contacts">
      <div className="bulletsBlock">
    <div className="bullet-item">
      <a href="mailto:kirillov_petya@bk.ru">
        <span className="iconBullet fa fa-at"></span>
        <p className="titleBullet">E M A I L</p>
        <p className="hideText">kirillov_petya@bk.ru<br />Contact us in WEB</p>
        </a>
    </div>
 
    <div className="bullet-item">
    <span className="iconBullet fa fa-phone"></span>
        <p className="titleBullet">T E L E P H O N E</p>
        <p className="hideText">8(916) 481-53-28<br />Mon-Fri : 9AM-9PM</p>
    </div>
 
    <div className="bullet-item">
    <a href="http://www.cybathlon.ethz.ch/">
    <span className="iconBullet fa fa-laptop"></span>
        <p className="titleBullet">C Y B A T H L O N</p>
        <p className="hideText">cybathlon.ethz.ch<br />Our customers</p>
        </a>
    </div>
</div>

</div>
      </div>
    </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App;