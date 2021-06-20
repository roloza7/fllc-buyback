import React, { Component } from "react"
import styled from "styled-components"
import { Button } from "./Toggler"

// ------------- scripts -------------
import { parseItemList } from "./scripts/parseItemList"

const Form = styled.form`
    margin: 5px auto;
    display: flex;
    flex-direction: column;
`;

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Items go here'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        parseItemList(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <label>
                    <textarea rows="12" cols="50" value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <Button value="Submit"> Submit </Button>
            </Form>            
        );
    }


}

export default InputForm