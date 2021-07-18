import React from 'react';
import { AnimateOnChange } from 'react-animation';
import { Button,Input, Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './PasswordPage.css';


class PasswordPage extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
          buttonPressed: false//set to false because the user hasn't pressed the button yet
        };
    
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(){
        this.setState(state => ({
          buttonPressed: !state.buttonPressed
        }));
      }
    
    
      render() {
        var transition;
        if(!this.state.buttonPressed){//if button isn't pressed
        //   transition = (
        //     <Button onClick={this.handleClick} ghost type="primary">
        //         Enter Site
        //         <Icon type="right" />
        //     </Button>
        //   );
        // }else { //if button is pressed switch to password input
          // transition = (
          //   <Input
          //     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          //     type="password"
          //     placeholder="Password"
          //     style={{width:"60%"}}
          //   />
          // );
        }
          return (
            <div align="middle"  className="center-content">
                <Row >
                    <h1 className="name">{this.props.name}</h1>
                </Row>
    
                {/* <Row>
                    <p className="progress">
                        Site in Progress
                    </p>
                </Row> */}
                <AnimateOnChange durationOut="1000000">
                    <Row gutter={16}>
                    <Col span={6}>
                    
                        <Button href={this.props.youtubeLink} target="_blank" ghost shape="circle" icon="youtube"></Button>
                    </Col>
                    <Col span={6}>
                        <Button href={this.props.instagramLink} target="_blank" ghost shape="circle" icon="instagram"></Button>
                    </Col>
                    <Col span={6}>
                        <Button href={this.props.twitterLink} target="_blank" ghost shape="circle" icon="twitter"></Button>
                    </Col>
                    <Col span={6}>
                        <Button href={this.props.githubLink} target="_blank" ghost shape="circle" icon="github"></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"7%"}}>
                    {transition}
                </Row>
                </AnimateOnChange>
            </div>
          );
    
      }
}

export default PasswordPage;
