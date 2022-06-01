import React, { Component } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import '../Containers/_result.scss';

export default class Result extends Component{

    constructor(props) {
        super(props);
        this.state={
          data:[],
          name: "",
          Description: "",
          VulnerabilityID: "",
          CVSSScore: "",
          VectorString: "",
          AffectedResource: "",
          MitigationSuggestion: "",
          References: "",
          date: "" 
        }
        
      }

    getData = async () => {
        try {
          const data = await axios.get("http://localhost:4000/app/get-all-data");
          // console.log(data.data);
          this.setState({
            data: data.data,
          });
        } catch (err) {
          console.log(err);
        }
      
      };

    componentDidMount() {  
        this.getData();
      }
    
    render(){

    return(
        <>
            <div className="contactus-main-container">
           <ul className="contactus-list">

           {
               
            this.state.data.map(item=>(

                <li className="contact-main-name-list">
                
                        <Link to={{pathname: '/result/Maindetails', search:item.id}}>{item.name}</Link> 
                
                </li>
                ))
           } 
           </ul>
                <div className="contact-main-details">
                <Outlet />
                </div>
               </div>
        </>
    );
}
}