import React, { Component } from 'react';
import MyNavbar from './navbar';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export default class Header extends React.Component {
    render() {
        return(
        <Card reverse>
            <div className="header-bg"><MyNavbar />
                <div className="row">
                    <div className="col-md-8">
                    <h1 className="explore-h1">Explore the Beauty of the World with US!</h1>
                    <Button color="primary" rounded className="header-btn">Explore</Button>
                    </div>
                </div>
            </div>
        <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button href="#">Button</Button>
    </CardBody>
</Card>
            
        );
    }
}