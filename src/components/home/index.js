import React from 'react'
import { Grid, Icon, Cell } from 'react-mdl'
import './style.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: false
        };


        this.pattern = new RegExp(/^[a-zA-Z][a-zA-Z_-]*$/);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value.toLowerCase() });
    }

    handleSubmit(event) {
        event.preventDefault();
        if ((this.state.name.length < 2 || this.state.name.length > 16) || !this.pattern.test(this.state.name)) {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
            window.location.href = `character/${this.state.name}`;
        }
    }

    render() {
        return <div className="home">
            <Grid className="menu-grid">
                <Cell col={12} tablet={12} phone={12}>
                    <ul className="menu">
                        <li><a title="Mantente Actualizado" href="https://www.facebook.com/groups/ombuserver"><Icon name="timeline" /><span>Facebook</span></a></li>
                        <li><a title="Discord Server" href="https://google.com"><Icon name="comment" /><span>Discord</span></a></li>
                    </ul>
                </Cell>
            </Grid>
            <h1>El Arsenal de Ombu Server</h1>
            <p>Aquí es donde puedes buscar todos los personajes de OmbuServer y obtener una vista detallada de sus habilidades, equipamientos, estadísticas y mercenarios..</p>
            <div className="searcher">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    {this.state.error === true && <p className="error-label">Nombre de personaje inválido, intenta con otro.</p>}
                    <button className="mdl-button mdl-button--raised mdl-button--colored" type="submit">BUSCAR</button>
                </form>
            </div>

        </div>
    }
};
