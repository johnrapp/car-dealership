import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

export default function IndexPage() {
	return (
		<Paper style={{ padding: 20, marginTop: 20 }}>
			<h1 style={{ margin: 0, marginBottom: 10 }}>Varmt välkommen till Sofias bilhandel!</h1>
			<div className='links'>
				<div className='link-container'>
					<Link to={'/view/employees'}>
						<img width={320} src='static/employees.jpg'/>
						<div>Våra anställda</div>
					</Link>
				</div>
				<div className='link-container'>
					<Link to={'/view/carmodels'}>
						<img width={320} src='static/carmodels.jpg'/>
						<div>Våra bilmodeller</div>
					</Link>
				</div>
			</div>
			
		</Paper>
	);
}