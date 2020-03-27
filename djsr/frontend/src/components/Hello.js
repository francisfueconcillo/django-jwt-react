import React, { Component } from "react";
import { axiosInstance } from "./AxiosApi.js";

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"",
        };
    }

    componentDidMount(){
      axiosInstance.get('/hello/')
        .then(response => {
          this.setState({
            message: response.data.hello,
          });
        }, error => {
          throw error;
        });
    }

    render(){
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Hello;