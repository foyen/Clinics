import React, { Component } from 'react'

export class ZipForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            zipCode: this.props.zipCode
        }
        console.log(this.state.zipCode)
        
    }

    onChange = event => { 
        if(event.target.value <= 99999){
            this.setState({
                zipCode: event.target.value
            })
            
        }
    }
    submit = () => {
        this.props.search(this.state.zipCode);
    }

    render() {
        return (
            <div className="zipCode">
            <div className="row">
                <div className="col col-md-8">
                <input
                    name="zipCode"
                    type="number"
                    className="form-control"
                    placeholder="Zip Code"
                    onChange={this.onChange}
                    value={this.state.zipCode}
                />
                </div>
            <button onClick={this.submit} className="btn btn-primary col col-lg-4">
                Search
            </button>
            </div>
            </div>
        )
    }
}

export default ZipForm;