import * as React from 'react';

export interface AvatarProps {
    email: string,
    src: string
}

export default class Avatar extends React.Component <AvatarProps, undefined> {

    render(){
        return (
            <div className="avatar">
            <p>
                <em>{this.props.email}</em>
            </p>
            <img src={this.props.src} className="img-rounded"/>
        </div>
        );
    }


}
