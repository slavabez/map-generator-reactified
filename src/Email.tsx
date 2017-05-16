import * as React from 'react';

export interface EmailProps {
    handleEmailChange: any,
    fetchGravatar: any

}

export default class Email extends React.Component <EmailProps, undefined> {

    constructor(props: EmailProps) {
        super(props);
    }

    render(){
        return (
            <div className="form-group">
                <input onChange={this.props.handleEmailChange} className="form-control" style={{
                    width: 200
                }} type="text"/>
                <button onClick={this.props.fetchGravatar} className="btn-success btn ">Fetch</button>
            </div>
        );
    }


}