import React from 'react';
class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Occaecat sint veniam fugiat irure exercitation quis officia cillum eiusmod aliqua exercitation nostrud aute deserunt. Officia est do cillum et amet adipisicing esse pariatur qui veniam tempor. Eiusmod consequat nisi do qui duis commodo proident pariatur proident ipsum sit."
      }
    }
    render() {
      return (
        <div className="text">
          <h1>Bienvenido a nuestra nueva pagina web</h1><br />
          <p className="mytext">{this.state.text}</p><br />
          <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/06/22/5fa4335996cdf.jpeg" height="60%" width="350px" id="img" alt="Hola"></img>
        </div>
      );
    }
}
export default Text;