import { Component } from 'react';
import '../Containers/_searchbar.scss';
import Spinner from "react-spinkit";
import ButtonLoader from './ButtonLoader';


export default class Searchbar extends Component{
    state = {
        loading: false
      };
    
      fetchData = () => {
        this.setState({ loading: true });
    
        //Faking API call here
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000000);
      };
    
      render() {
        const { loading } = this.state;
    return(
        <>
        <div className="searchbar-container">
        
            <h1>Web Injection Automation</h1>

        <div className="headingtext">
            <p>Type Your URl here!</p>
        </div>


            <form>
            <div className="searchbar-section">
                <input type="text" className="searchbox" placeholder="Enter Url here..!!" />
                <button onClick={this.fetchData} disabled={loading}>
          {loading}
          {loading && <span>Scanning...!!</span>}
          {!loading && <span>Check</span>}
        </button>
            </div>
            </form>

         </div>
        </>
    );
}}