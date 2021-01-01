import React, { Component } from 'react'
import consultas from "../sample/iconsFooter/consultas.png"
import whatsapp from "../sample/iconsFooter/whatsapp.png"
import email from "../sample/iconsFooter/email.png"
import facebook from "../sample/iconsFooter/facebook.png"
import instagram from "../sample/iconsFooter/instagram.png"

export default class Footer extends Component {
    constructor(args) {
        super(args);
        this.state={

        contactMe:true
        };
    }
    onClick =()=>{
        if(this.state.contactMe===true ){this.setState({contactMe:false})}
        else{this.setState({contactMe:true})}
    } 
    
    render() {
        
        return (
           <div>
           
            <footer style={{marginTop:"25%",}}>
            <div class="footcnt">
                    <div className="fInfo">
                        <span>
                            Esto no es Google no te confundas
                        </span>
                    </div> 
                    <div className="fContact">
                        <a href="#">Contactanos</a>
                        <a href="#">Nuestros CV</a>
                        <a href="#">Linkedin Patricio Miroshnitshenko</a>
                        <a href="#">Linkedin Melani Luraschi</a>
                    </div>
            </div>
               
            
            
        </footer>
        <div hidden={this.state.contactMe}>
   
        </div>
        </div>

        )
    }
}