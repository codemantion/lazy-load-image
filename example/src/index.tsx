// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LazyImage  from "../../.";


const App = () => {

    return (
        <div>
            <LazyImage
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                width="700px"
                height="700px"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
