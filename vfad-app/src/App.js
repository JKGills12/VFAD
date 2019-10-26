import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

// import Marker from './components/marker';
// import Search from './components/search';
import Alert from './components/Alert/index';
import About from './pages/About';
import Search from './pages/Search';
import Login from './pages/Login';
import Host from './pages/Host';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/discover" component={Discover} /> */}
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/host" component={Host} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			flats: [],
// 			allflats: [],
// 			selectedFlat: null,
// 			searchQuery: ''
// 		};
// 	}

// 	componentDidMount() {
// 		const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

// 		fetch(url).then((response) => response.json()).then((data) => {
// 			this.setState({
// 				flats: data,
// 				allflats: data
// 			});
// 		});
// 	}

// 	selectFlat = (flat) => {
// 		console.log(flat);
// 		this.setState({
// 			selectedFlat: flat
// 		});
// 	};

// 	findApartments = (searchQuery) => {
// 		this.setState({
// 			searchQuery: searchQuery,
// 			flats: this.state.allflats.filter((flat) => {
// 				return flat.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
// 			})
// 		});
// 	};

// 	render() {
// 		let center = {
// 			lat: 48.8566,
// 			lng: 2.3522
// 		};
// 		if (this.state.selectedFlat) {
// 			center = {
// 				lat: this.state.selectedFlat.lat,
// 				lng: this.state.selectedFlat.lng
// 			};
// 		}
// 		return (
// 			<div className="app">
// 				<div className="main">
// 					<Search findApartments={this.findApartments} />
// 					<div className="flats">
// 						{this.state.flats.map((flat) => {
// 							return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} />;
// 						})}
// 					</div>
// 				</div>
				
// 			</div>
// 		);
// 	}
// }

export default App;
