

import './App.css';
import React, {Component} from "react";



import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado'



class App extends Component{





  state = {
    termino: "",
    imagenes: []
  }

  conApi=() =>{ 
    const url = `https://pixabay.com/api/?key=15883836-757443b8923d74855848ed272&q=`+this.state.termino+"&per_page=100";
    
  //   {
  //     // ...
  //     form: {
  //         login: "YOUR_E621_USER_NAME",
  //         password_hash: "YOUR_API_KEY"
  //     }
  // }
    // const url ='https://e621.net/post/index.json?limit=10/woler';

    // const url2 = `https://e621.net/?key=Tsz9F1U5cooZxDpvfxFuhjtX&posts?tags=`+this.state.termino+`/woler`;

  

    fetch(url)
    .then(respuesta => respuesta.json() ) 
    .then(resultado => this.setState({imagenes : resultado.hits} ))
    


    
    

  }




  datosBusqueda= (termino)=>{
    this.setState({
      termino
    },()=>{
      this.conApi();
    })
  }


  render(){
    return (
      <div className="app container" >
  
        <div className="jumbotron" >
  
        <p className="lead text-center" >Buscador de img</p>
  
  
      <Buscador
      
      datosBusqueda={this.datosBusqueda}
      
      />

  
  
  
      </div>

        
  <Resultado
  
  imagenes = {this.state.imagenes}

  />


      {/* {this.state.termino} */}
      </div>

  

    );
  }


}


export default App;
