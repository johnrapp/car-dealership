import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

export default function IndexPage() {
	return (
		<Paper style={{ padding: 20, marginTop: 20 }}>
			<h1>Välkommen till min bilhandel</h1>
			<div>
				<Link to={'/view/employees'}>Se våra anställda</Link>
			</div>
			<div>
				<Link to={'/view/carmodels'}>Se våra bilmodeller</Link>
			</div>
		</Paper>
	);
}