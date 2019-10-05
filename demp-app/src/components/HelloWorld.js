import React from 'react';

//named export
export const Helloworld = () => {
    // return React.createElement(
    //     'h1',
    //     null,
    //     'Hello World!'
    // );
        //or "return <h1>Hello World!!!</h1>"
    return <>
        <h1>Hello World!!!</h1>
        <span>test</span>
    </>;
};

//default export
//if not default exported, and if not named-imported, it is not included in the built app file( "tree shaking")
//export default Helloworld;