import React from "react";
import { Button, Input } from 'antd';

export default class Login extends React.Component{
    state = {
        email: '',
        password: '',
    }

    onSubmit = async () => {
        const response = await this.props.mutate({
          variables: this.state,
        });
        console.log(response);
      }

    render(){
        return(
            <div className ='register'>
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
                    <br />
                    <Button onClick={() => this.onSubmit()} type ='primary'>
                       LogIn
                    </Button>
            </div>
        );
    }
} 