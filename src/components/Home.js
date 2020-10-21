import React from "react";
import "../styles/Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../components/Card";

function Home() {
	const classes = useStyles();
	return (
		<div className="home">
			<h1>Our Vision</h1>
			<div className={classes.root}>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={6}>
						<p className="para">
							We provide experienced Home tutors for all classes
							in Indirapuram, Ghaziabad, Vaishali, Vasundhara and
							Noida. We cover all the subjects. Best and
							successful Home tutors providers in Delhi Ncr since
							2009.
						</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<p className="para">
							Online coaching classes from VIII-XII Started. In
							the wake of covid 19, we have started an initiative
							for imparting the best education in lowest possible
							fees. In this regard, We have started Online Classes
							at minimal fees. Join today, before syllabus and
							time runs away.
						</p>
					</Grid>
				</Grid>
			</div>
			<div className="card__section">
				<Grid container spacing={2}>
					<Grid item xs>
						<Card
							heading="Experienced Faculty"
							body="Home tutors selected through vigorous interview process"
							color="#ff5c50"
						/>
					</Grid>
					<Grid item xs>
						<Card
							heading="Teachers as Mentors"
							body="Home tutors counsel students from time to time and inspire them to pursue their interests."
							color="#ffa31b"
						/>
					</Grid>
					<Grid item xs>
						<Card
							heading="Quality Content"
							body="Affordable teachers with no compromise of quality"
							color="#DA70D6"
						/>
					</Grid>
				</Grid>
				<Grid container spacing={4}>
					<Grid item xs>
						<Card
							heading="Flexible Timings"
							body="Parents can set time according to their needs and there is no bar on the number of classes"
							color="#9ff53c"
						/>
					</Grid>
					<Grid item xs>
						<Card
							heading="New Techniques"
							body="Home tutors are counseled from time to time to keep them updated about the students' social interests in order to make student-teacher relationship fruitful."
							color="#5bd2e1"
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default Home;
