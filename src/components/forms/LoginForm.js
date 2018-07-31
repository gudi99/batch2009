import React from "react";
import {
	Grid,
	Header,
	Image,
	Form,
	Segment,
	Button,
	Message
} from "semantic-ui-react";
import logoImage from "../images/icon.png";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
	state = {
		data: {
			username: "",
			password: ""
		},
		errors: {}
	};

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
	};

	validate = data => {
		const errors = {};
		if (!data.username) errors.username = "Username needed!";
		if (!data.password) errors.password = "Can't be blank!";
		return errors;
	};

	render() {
		const { data, errors } = this.state;

		return (
			<div className="login-form">
				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle"
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							<Image src={logoImage} /> Log-in to your account
						</Header>
						<Form
							size="large"
							onSubmit={this.onSubmit}
							error={!!errors}
						>
							<Segment stacked>
								{errors.username && (
									<InlineError text={errors.username} />
								)}
								<Form.Input
									fluid
									icon="user"
									iconPosition="left"
									id="username"
									placeholder="Username"
									name="username"
									onChange={this.onChange}
									value={data.username}
									error={!!errors.username}
								/>
								{errors.password && (
									<InlineError text={errors.password} />
								)}
								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									name="password"
									id="password"
									placeholder="Password"
									type="password"
									onChange={this.onChange}
									value={data.password}
									error={!!errors.password}
								/>
								<Button color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							{"Haven't"} got login details? &nbsp; Contact &nbsp;
							<a
								href="https://www.facebook.com/saitrinath.saka"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sai Trinath Saka
							</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default LoginForm;
