import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
class Login extends Component{
constructor(){
	super();
	this.state = {
		username: '',
		password: ''
	}
}
handleInput = (e) => {
	this.setState({
	[e.currentTarget.name]: e.currentTarget.value
	})
}
handleSubmit = (e) => {
	e.preventDefault();
	this.props.handleLogin(this.state.username, true);
}
render(){
	return(
		<Grid container columns={1} textAlign='center' verticleAlign='middle' style={{height:'100%'}} >
			<Grid.Column style={{maxWidth: 450}}>
				<Segment>
					<Form onSubmit={this.handleSubmit}>
						<Form.Input fluid icon='user' iconPostion='left' type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='username'/>
						<Form.Input fluid icon='lock' iconPostion='left' type='password' name='password' onChange={this.handleInput} value={this.state.password}placeholder='password'/>
						<Button color='blue' fluid size='medium' type='Submit'>Login</Button>
					</Form>
				</Segment>
			</Grid.Column>
		</Grid>
		)
	}
}

export default Login;