import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import styled from'styled-components';


const Main =styled.main`
    background-color:var(--black);
    color:var(--white);
    flex:1;
    padding:50px 5% 50px 5%;
`; 
//tag do tipo fragment
function PageDefault(props){
    return (
        <>
            <Menu/>
                <Main>
                    {props.children}
                    
                </Main>
            <Footer/>
        </>
    );
}
export default PageDefault;