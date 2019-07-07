import React from "react";
import { Button, Input, Checkbox } from 'antd';
import { gql } from 'graphql-tag';
import { graphql } from 'react-apollo';

export default class Register extends React.Component{
    state = {
        username: '',
        email: '',
        password: '',
        consent: false,
    }

    onChange = (e) => {
        if (e.target.name === 'consent') {
          this.setState({
            [e.target.name]: e.target.checked,
          });
        } else {
          this.setState({
            [e.target.name]: e.target.value,
          });
        }
      }
    
      onSubmit = async () => {
        const response = await this.props.mutate({
          variables: this.state,
        });
        console.log(response);
      }


    render(){
        return(

            <div className='register'>
                <Input 
                    name = 'username' 
                    placeholder='Username' 
                    onChange ={e => this.onChange(e)} 
                    value={this.state.username} />
                <Input 
                    name = 'email' 
                    placeholder='Email' 
                    onChange ={e => this.onChange(e)} 
                    value={this.state.email}/>
                <Input 
                    name = 'password' 
                    placeholder='Password' 
                    onChange ={e => this.onChange(e)} 
                    value={this.state.password} />
                    <Checkbox 
                        name ='consent'
                        checked = {this.state.consent}
                        onChange={e => this.onChange(e)}
                    >
                    Сonsent to data processing
                    </Checkbox>
                    <br />
                    <Button onClick={() => this.onSubmit()} type ='primary'>
                       Register
                    </Button>
            </div>
        );
    }
} 

//Для будущего бэкэнда

// const mutation = gql`

// mutation($username: String!, $email: String!, $password: String!, $consent: Boolean) {
// 	register(username: $username, email: $email, password: $password, consent: $consent) {
// 	  id
// 	} 
// }
// `;

// export default graphql(mutation)(Register);