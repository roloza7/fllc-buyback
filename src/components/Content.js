import React from "react";
import styled, { ThemeProvider } from "styled-components"
import InputForm from "./InputForm"
import Table from "./Table"



const ContentBox = styled.div`
    min-height: 0;
    display: flex;
    flex: 1 1 auto;
`;

class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toShow: 'form',
            table: undefined
        }
    }   

    showInfo = (values) => {
        console.log("Info showing: " + values);
        this.setState({ toShow: 'table', table: values})
    }

    render () {
        return (
            <ContentBox>
                <Wrapper toShow={this.state.toShow} showInfo={this.showInfo} table={this.state.table} theme={this.props.theme}/>
            </ContentBox>
        )
    }
}

function Wrapper(props) {
    const toShow = props.toShow;
    console.log(props.theme)
    switch(toShow) {
        case 'form':
            return <InputFormComponent showInfo={props.showInfo}/>
        
        case 'loading':

            break;

        case 'table':
            return <Table table={props.table} theme={props.theme}/>
    }

}

function TableComponent(props) {

}

function InputFormComponent(props) {
    return <InputForm onJSONParse={props.showInfo}/>;
}

export default Content