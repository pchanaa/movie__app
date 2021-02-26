import React from "react";
import "./Detail.css"
class Detail extends React.Component{
     componentDidMount(){
         console.log(this.props)
         const {location ,history} = this.props;
         if(location.state === undefined){
             history.push("/");//history.goBack();로도 사용할 수 있음 그런데 체감삼 history.push("/")가 더 빠른듯 함
             //=>Redirecting
         }
     }
    render(){
        const {location} = this.props;
        if(location.state)return<div className="detail">{location.state.title}</div>
        else return null;
    }

}
export default Detail;