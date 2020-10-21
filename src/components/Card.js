import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function SimpleCard({ heading, body, color }) {
	const classes = useStyles();

	return (
		<Card className={classes.root} style={{ backgroundColor: color }}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{heading}
				</Typography>
				<Typography
					variant="body"
					component="p"
					style={{ paddingTop: 5 }}
				>
					{body}
				</Typography>
			</CardContent>
		</Card>
	);
}

const useStyles = makeStyles({
	root: {
		minWidth: 245,
		minHeight: 180,
		flex: 1,
		margin: 10,
		padding: 16,
		borderRadius: 10,
	},
});

export default SimpleCard;
