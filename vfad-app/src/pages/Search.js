import React, { Component } from 'react';

import './Search.css';



import Flat from './flat';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import Search from './searchprop';

class SearchProp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flats: [],
			allflats: [],
			selectedFlat: null,
			searchQuery: ''
		};
	}

	componentDidMount() {
		const url = 'https://raw.githubusercontent.com/LSteph23/properties-boilerplate/master/properties.json'

		fetch(url).then((response) => response.json()).then((data) => {
			this.setState({
				flats: data,
				allflats: data
			});
		});
	}

	selectFlat = (flat) => {
		console.log(flat);
		this.setState({
			selectedFlat: flat
		});
	};

	findApartments = (searchQuery) => {
		this.setState({
			searchQuery: searchQuery,
			flats: this.state.allflats.filter((flat) => {
				return flat.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
			})
		});
	};

	render() {
		let center = {
			lat: 47.6062,
			lng: -122.332
		};
		if (this.state.selectedFlat) {
			center = {
				lat: this.state.selectedFlat.lat,
				lng: this.state.selectedFlat.lng
			};
		}
		return (
			<div className="app">
				<div className="main">
					<Search findApartments={this.findApartments} />
					<div className="flats">
						{this.state.flats.map((flat) => {
							return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} />;
						})}
					</div>
				</div>
				<div className="map">
        <GoogleMapReact 
          center= { center }
          zoom= { 11 }
          >
          {this.state.flats.map((flat) => {
            
            return <Marker key={flat.id} 
            lat={flat.lat} 
            lng={flat.lng} 
            text={flat.price} 
            selected = {flat===this.state.selectedFlat}/>
          })}
        </GoogleMapReact>
        </div>
				
			</div>
		);
	}
}

export default SearchProp;

// class Search extends Component {
//  state = {
//    query: '',
//  }

//  handleInputChange = () => {
//    this.setState({
//      query: this.search.value
//    })
//  }

//  render() {
//    return (
//      <form>
//        <input
//          placeholder="Search for..."
//          ref={input => this.search = input}
//          onChange={this.handleInputChange}
//        />
//        <p>{this.state.query}</p>
//      </form>
//    )
//  }
// }

// export default Search



// class Search extends Component {
//   render() {
//     return (
   
//    <div className="container">
//      <ReactiveBase
//        app="VFAD-APP"
//        credentials="NUrMeJJo6:26af7ca7-82db-478d-80b0-ea00d5a4a916"
//        type="listing"
//        theme={{
//          primaryColor: '#41AbF5'
//        }}
//      >
//        <nav className="nav"></nav>
         
//          <DataSearch
//            componentId="SearchSensor"
//            dataField="name"
//            autosuggest={false}
//            placeholder="Search by Location"
//            iconPosition="left"
//            className="search"
//            highlight={true}
//          />
      
     
//        <div className="left-col">
//          <DateRange
//            dataField="date_from"
//            componentId="DateRangeSensor"
//            title="When"
//            numberOfMonths={2}
//            queryFormat="basic_date"
//            initialMonth={new Date('2019-10-29')}
//          />
 
//          <NumberBox
//            componentId="GuestSensor"
//            dataField="accommodates"
//            title="Guests"
//            defaultSelected={2}
//            labelPosition="right"
//            data={{
//              start: 1,
//              end: 16,
//            }}
//          />
 
//          <RangeSlider
//            componentId="PriceSensor"
//            dataField="price"
//            title="Price Range"
//            range={{
//              start: 10,
//              end: 250,
//            }}
//            rangeLabels={{
//              start: '$10',
//              end: '$250',
//            }}
//            defaultSelected={{
//              start: 10,
//              end: 50,
//            }}
//            stepValue={10}
//            interval={20}
//            react={{
//              and: ['DateRangeSensor'],
//            }}
//          />
//        </div>
 
//        <ResultCard
//          className="right-col"
//          componentId="SearchResult"
//          dataField="name"
//          size={12}
//          onData={data => ({
//            image: data.image,
//            title: data.name,
//            description: (
//              <div>
//                <div className="price">${data.price}</div>
//                <p className="info">{data.room_type} · {data.accommodates} guests</p>
//              </div>
//            ),
//            url: data.listing_url,
//          })}
//          pagination
//          react={{
//            and: ['SearchSensor', 'GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
//          }}
//          innerClass={{
//            resultStats: 'result-stats',
//            list: 'list',
//            listItem: 'list-item',
//            image: 'image',
//          }}
//        />
     
//      </ReactiveBase>
     
 
     
    
   
   
      
//    </div>
   
  
 
//     );
//   }
// }

// export default Search;
