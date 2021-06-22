import React, { Component } from "react"
import styled from "styled-components"
import { Button } from "./Toggler"

// ------------- scripts -------------
import { parseItemList } from "./scripts/parseItemList"

// ------------- stylesheets ---------
import './stylesheets/InputForm.css'

const Form = styled.form`
    margin: 5px auto;
    display: flex;
    flex-direction: column;
`;

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Items go here',
            show: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        parseItemList(this.state.value).then((res) => this.props.onJSONParse(res));
        this.setState({ show: false });
        event.preventDefault();
    }

    render() {

        const classes = this.state.show ? 'input-form' : 'input-form hide'

        return (
            <Form className={ classes } onSubmit={this.handleSubmit}>
                <label>
                    <textarea rows="12" cols="50" value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <Button value="Submit"> Submit </Button>
            </Form>            
        );
    }


}

export default InputForm