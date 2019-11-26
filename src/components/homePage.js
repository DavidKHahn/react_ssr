import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {

    exampleMethod() {
        console.log('JS is running')
    }

    head(){
        return(
            <Helmet>
                <title>
                    React SSR RenderTown Title provided by React Helmet
                </title>
            </Helmet>
        )
    }

    render() {
        return(
            <div>
                {this.head()}
                <h1>Home Page</h1>
                <p>Hello, Welcome to Server Side RenderTown!</p>
                <button onClick={() => this.exampleMethod()}>Console log some text</button>
            </div>
        )
    }
}

export default Home;