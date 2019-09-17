import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Loged in user info</h1>
        <h3>{props.info}</h3>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin ? <WrappedComponent {...props} /> : <h4>Please log in to see the message</h4>}
        </div>
    );
};

const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="top secret message" />, document.getElementById('app'));
