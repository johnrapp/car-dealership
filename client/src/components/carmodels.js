import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import RemoveIcon from 'material-ui/svg-icons/action/delete';

import { getCarmodels } from '../services/api';

export default class Carmodels extends Component {
    constructor(props) {
        super(props);
        this.state = { carmodels: [] };
    }

    componentWillMount() {
        getCarmodels().then(carmodels => this.setState({ carmodels }));
    }
    render(props) {
        const { carmodels } = this.state;
        return (
            <div>
                <h1>Våra bilmodeller</h1>
                {carmodels.map(({ id, brand, model, price }) => (
                    <Paper key={id} style={{ padding: 20, marginTop: 20, display: 'flex' }}>
                        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ fontSize: 20 }}>{ brand }</div>
                            <div style={{ fontSize: 16 }}>{ model } | { price }kr</div>
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