import React from 'react';

class Home extends React.Component {

    exampleMethod() {
        console.log('JS is running')
    }

    render() {
        return(
            <div>
                <h1>Home Page</h1>
                <p>Hello, Welcome to Server Side RenderTown!</p>
                <button onClick={() => this.exampleMethod()}>Console log some text</button>
            </div>
        )
    }
}

export default Home;