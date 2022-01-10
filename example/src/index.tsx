// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {LazyImage} from "../../.";

const App = () => {
    return (
        <div>
            <LazyImage src="/logo192.png"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
