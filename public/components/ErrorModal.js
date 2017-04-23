import React, {Component} from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import * as ReactDOMServer from "react/lib/ReactDOMServer";
import * as ReactDOM from "react/lib/ReactDOM";


export default class  ErrorModal extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
   let modalMarkup= <div id="error-modal" className="reveal tiny text-center" data-reveal="">
      <h5>{this.props.title}</h5>
      <p>{this.props.message}</p>
      <p>
        <button className="button hollow" data-close="">Okay</button>
      </p>
    </div>;
    let $modal=$(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    let modal =new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render(){
    return(<div></div>);


  }
};

ErrorModal.defaultProps={
  title:'Error'
}
ErrorModal.propTypes={
  title:PropTypes.string,
  message:PropTypes.string.isRequired
};

