import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import { connect } from 'react-redux';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary'; 
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component{

    componentDidMount(){
        //when the whole page mounted successfully, this will execute
        //the original robots list was empty, so we fetch the list from the internet
        //and then, setState
        this.props.onRequestRobots()
    }

    render(){
        const {searchField, onSearchChange,robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
             <h1 className='tc f1'>Loading...</h1> :
        (
            <div className='tc'>
                 <h1 className='f1'>RoboFriends</h1>
                 <Searchbox searchChange={onSearchChange}/>
                 <Scroll>
                     <ErrorBoundary>
                           <Cardlist robots={filteredRobots}/>
                     </ErrorBoundary>
                 </Scroll>
             </div> 
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);