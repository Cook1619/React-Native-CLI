import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ProjectCard from '../components/ProjectCard';

class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount(){
        this.setState({
            projects:[
                { name: 'Test 1', description: 'Angular' },
                { name: 'Test 2', description: 'React' },
                { name: 'Test 3', description: 'Vue' },
                { name: 'Test 4', description: 'ReactNative' },
            ]
        });
    }
    render(){
        return (
            <ScrollView style={styles.container}>
                {this.state.projects.map((project, index) => {
                    return <ProjectCard key={index} project={project} />
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default HomeScreen;