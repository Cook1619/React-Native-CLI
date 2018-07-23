import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';

class ProjectCard extends Component {

    render() {
        return (
            <Card featuredTitle={this.props.project.name}
                image={require('../images/deathstar.jpg')}
            >
                <Button backgroundColor="blue" 
                title="View Project" 
                onPress={ this.props.Navigate}/>
            </Card>
        );
    }
}

export default ProjectCard;