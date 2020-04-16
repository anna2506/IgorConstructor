import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import Article from "../../Components/Article/Article";

import InputForm from "../../Components/InputForm/InputForm";
import * as constructorActions from "../../store/actions/constructor";
import * as inputType from "../../inputTypes";

class Constructor extends Component {
    componentDidMount() {
        if (!!!this.props.fieldset)
            this.props.setFields([
                {
                    inputType: inputType.mainHeader,
                    text: ''
                }
            ])
    }

    render() {
        return (
            <Row>
                <Col>
                    <InputForm fieldset={this.props.fieldset} id={this.props.id}/>
                    <div className="d-block d-lg-none d-xl-none">
                        <h2 style={{color: "rgba(206,212,218,0.8)"}}>Preview</h2>
                        <Article fieldset={this.props.fieldset}/>
                    </div>
                </Col>
                <Col className="d-none d-lg-block d-xl-block">
                    <h2 style={{color: "rgba(206,212,218,0.8)"}}>Preview</h2>
                    <Article fieldset={this.props.fieldset}/>
                </Col>
            </Row>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFields: (fields) => dispatch(constructorActions.setFields(fields)),
    }
};

const mapStateToProps = (state) => {
    return {
        fieldset: state.constructor.fields,
        id: state.constructor.id
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)
