import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import RemoveIcon from 'material-ui/svg-icons/action/delete';

import { getEmployees } from '../services/api';

export default class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }

    componentWillMount() {
        getEmployees().then(employees => this.setState({ employees }));
    }
    render(props) {
        const { employees } = this.state;
        return (
            <div>
                <h1>Våra anställda</h1>
                {employees.map(({ id, name }) => (
                    <Paper key={id} style={{ padding: 20, marginTop: 20, display: 'flex' }}>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: 20 }}>{ name }</span>
                        </div>
                        <div>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <RemoveIcon />
                            </IconButton>
                        </div>
                    </Paper>
                ))}
            </div>
            
        );
    }
}