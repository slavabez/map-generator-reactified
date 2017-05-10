import * as React from 'react';


export class App extends React.Component <undefined, undefined> {

    log(event: any){
        console.log(event);
    }


    render(){
        return <div>
            <h1>App</h1>
            <p>Content would be here</p>
            <button className="bums" onClick={this.log}>Click me for output</button>
        </div>
    }


}