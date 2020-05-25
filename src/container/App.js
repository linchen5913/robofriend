import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary'; 
import './App.css';


class App extends Component{
    constructor(){
        super();
        this.state = { // state is to describe our app! whenever the state changes, it will transfer the message to the children(robots, searchfield)
            robots:[],
            searchfield :''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}))
        
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
             <h1 className='tc f1'>Loading...</h1> :
        (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div> 
        )
    }
}


export default App;