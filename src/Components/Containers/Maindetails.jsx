import React, { Component } from 'react';
import '../Containers/_maindetails.scss';
import axios from "axios";


export default class ContactusDetails extends Component{
    
    constructor(props) {
        super(props);
        this.state={
          data:{},
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
    
      getData = async (id) => {
        try {
          const data = await axios.get(`http://localhost:4000/app/get-data/${id}`);
          // console.log(data.data);
          this.setState({
            data: data.data,
          });
        } catch (err) {
          console.log(err);
        }
        console.log(id);
        
      };
    
      componentDidMount() {  
          // console.log(window.location.search.split("?")[1])
        this.getData((window.location.search.split("?")[1]));
      // this.setState({
      //   id:window.location.search.split("?")[1]
      // })
      }



  render() {

    return(
        <>
              <div className="contact-main-details-list">
                        <div className="questionanswer">
                        <div className="question">
                        <p>Name: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.name}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>Description: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.Description}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>Vulnerability ID: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.VulnerabilityID}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>CVSS Score: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.CVSSScore}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>Vector String: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.VectorString}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>Affected Resource: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.AffectedResource}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>Mitigation Suggestion: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.MitigationSuggestion}</p>
                        </div>
                        </div>
                        <div className="questionanswer">
                        <div className="question">
                        <p>References: </p>
                        </div>
                        <div className="answer">
                        <p>{this.state.data.References}</p>
                        </div>
                        </div>
                    </div>
        </>
    );
}
}