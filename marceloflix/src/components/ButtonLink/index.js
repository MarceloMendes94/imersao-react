import React from 'react';

function ButtonLink(props){
    //props => {className="class recebida na chamada "}
    console.log(props)
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}
export default ButtonLink;