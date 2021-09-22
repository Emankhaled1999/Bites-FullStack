import React from 'react';
import { useLocation } from "react-router-dom";
import {BG, Form2, Input, Title} from './Styles';

function Checkout() {
    let location = useLocation();
    return (
       <div>
           <BG>
           <div>
           <Title>{location.state.productname}</Title>
           <Form2>
               <Input type="email" placeholder="Enter your fullname"></Input>
               <Input type="email" placeholder="Enter your mobile number"></Input>
               <Input type="email" placeholder="Enter your full address"></Input>
               <button>CHECKOUT</button>
           </Form2>
           

           </div>
           </BG>
           
       </div>
       

    );
}


export default Checkout;
