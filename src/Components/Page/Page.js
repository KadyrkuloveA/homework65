import React from 'react';

const Page = (props) => {
    return (
        <div className="card" style={{marginTop: '30px'}}>
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
};

export default Page;