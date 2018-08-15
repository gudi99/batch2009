import React from "react";
import {
	Table,
	Button,
	Responsive,
	Divider,
	Label,
	Icon
} from "semantic-ui-react";

class SocialAccountsPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					{
						// This should appear if user is viewing his profile in My profile time only.
						// If he come to this page from status cards, then this should not display
						<Label attached="top right" as="a">
							<Icon name="edit" />
							Edit
						</Label>
					}
					<Table striped>
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Button
										color="facebook"
										icon="facebook"
										content="Facebook"
									/>
								</Table.Cell>
								<Table.Cell>
									https://www.facebook.com/saitrinath.saka
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="green"
										icon="whatsapp"
										content="WhatsApp"
									/>
								</Table.Cell>
								<Table.Cell>9866153176</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="twitter"
										icon="twitter"
										content="Twitter"
									/>
								</Table.Cell>
								<Table.Cell>
									https://twitter.com/sst_trinath
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="yellow"
										icon="mail"
										content="Gmail"
									/>
								</Table.Cell>
								<Table.Cell>sst.trinath@gmail.com</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="google plus"
										icon="google plus"
										content="Google Plus"
									/>
								</Table.Cell>
								<Table.Cell>
									https://plus.google.com/101044252818501620910
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="instagram"
										icon="instagram"
										content="Instagram"
									/>
								</Table.Cell>
								<Table.Cell>saitrinathsaka</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="linkedin"
										icon="linkedin"
										content="Linkedin"
									/>
								</Table.Cell>
								<Table.Cell>
									https://www.linkedin.com/in/saitrinathsaka/
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="youtube"
										icon="youtube"
										content="YouTube"
									/>
								</Table.Cell>
								<Table.Cell>No account</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="google plus"
										icon="pinterest"
										content="Pinterest"
									/>
								</Table.Cell>
								<Table.Cell>
									https://in.pinterest.com/saitrinaths/
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Button
										color="black"
										icon="github"
										content="Github"
									/>
								</Table.Cell>
								<Table.Cell>
									https://github.com/SakaSaiTrinath
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Responsive>

				<Responsive {...Responsive.onlyMobile}>
					{
						// This should appear if user is viewing his profile in My profile time only.
						// If he come to this page from status cards, then this should not display
						<Label as="a">
							<Icon name="edit" />
							Edit
						</Label>
					}
					<Divider />
					<Button circular color="facebook" icon="facebook" />
					<a
						href="https://www.facebook.com/saitrinath.saka"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Saka Sai Trinath
					</a>
					<Divider />
					<Button color="green" icon="whatsapp" circular />
					<a>9866153176</a>
					<Divider />
					<Button circular color="twitter" icon="twitter" />
					<a
						href="https://twitter.com/sst_trinath"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						sst_trinath
					</a>
					<Divider />
					<Button color="yellow" icon="mail" circular />
					<a> sst.trinath@gmail.com</a>
					<Divider />
					<Button circular color="google plus" icon="google plus" />
					<a
						href="https://plus.google.com/101044252818501620910"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Sai Trinath Saka
					</a>
					<Divider />
					<Button color="instagram" icon="instagram" circular />
					<a> saitrinathsaka </a>
					<Divider />
					<Button color="linkedin" icon="linkedin" circular />
					<a
						href="https://www.linkedin.com/in/saitrinathsaka/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						saitrinathsaka
					</a>
					<Divider />
					<Button color="youtube" icon="youtube" circular />
					<a>No account</a>
					<Divider />
					<Button
						color="google plus"
						icon="pinterest"
						circular
					/>{" "}
					<a
						href="https://in.pinterest.com/saitrinaths/"
						rel="noopener noreferrer"
					>
						saitrinaths
					</a>
					<Divider />
					<Button color="black" icon="github" circular />{" "}
					<a
						href="https://github.com/SakaSaiTrinath"
						rel="noopener noreferrer"
					>
						SakaSaiTrinath
					</a>
				</Responsive>
			</div>
		);
	}
}

export default SocialAccountsPanel;
