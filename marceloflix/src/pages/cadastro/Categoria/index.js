import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
function CadastroCategoria(){
    return(
      <>
        <PageDefault>
            <h1>Cadastro de categoria.</h1>
            <br/>
            <Link to="/">
                voltar a página inicial
            </Link>
        </PageDefault>
      </>
    );
  }
export default CadastroCategoria;  