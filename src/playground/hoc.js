// Higher Order Component (HOC) - a component that  renders another component
// Reuse code
// Render hijacking
// Props manipulation
// Abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDom.render(<AdminInfo isAdmin={true} info="there are the details" />, document.getElementById('app'));