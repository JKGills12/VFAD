import React, { Component } from 'react';
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
// import { ReactiveGoogleMap } from '@appbaseio/reactivemaps';


import './Search.css';






class Search extends Component {
  render() {
    return (
   
   <div className="container">
     <ReactiveBase
       app="VFAD-APP"
       credentials="NUrMeJJo6:26af7ca7-82db-478d-80b0-ea00d5a4a916"
       type="listing"
       theme={{
         primaryColor: '#41AbF5'
       }}
     >
       <nav className="nav"></nav>
         
         <DataSearch
           componentId="SearchSensor"
           dataField="name"
           autosuggest={false}
           placeholder="Search by Location"
           iconPosition="left"
           className="search"
           highlight={true}
         />
      
     
       <div className="left-col">
         <DateRange
           dataField="date_from"
           componentId="DateRangeSensor"
           title="When"
           numberOfMonths={2}
           queryFormat="basic_date"
           initialMonth={new Date('2019-10-29')}
         />
 
         <NumberBox
           componentId="GuestSensor"
           dataField="accommodates"
           title="Guests"
           defaultSelected={2}
           labelPosition="right"
           data={{
             start: 1,
             end: 16,
           }}
         />
 
         <RangeSlider
           componentId="PriceSensor"
           dataField="price"
           title="Price Range"
           range={{
             start: 10,
             end: 250,
           }}
           rangeLabels={{
             start: '$10',
             end: '$250',
           }}
           defaultSelected={{
             start: 10,
             end: 50,
           }}
           stepValue={10}
           interval={20}
           react={{
             and: ['DateRangeSensor'],
           }}
         />
       </div>
 
       <ResultCard
         className="right-col"
         componentId="SearchResult"
         dataField="name"
         size={12}
         onData={data => ({
           image: data.image,
           title: data.name,
           description: (
             <div>
               <div className="price">${data.price}</div>
               <p className="info">{data.room_type} · {data.accommodates} guests</p>
             </div>
           ),
           url: data.listing_url,
         })}
         pagination
         react={{
           and: ['SearchSensor', 'GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
         }}
         innerClass={{
           resultStats: 'result-stats',
           list: 'list',
           listItem: 'list-item',
           image: 'image',
         }}
       />
     
     </ReactiveBase>
     
 
     
    
   
   
      
   </div>
   
  
 
    );
  }
}

export default Search;
// //        </ReactiveBase> 
// //     )
// //   }
// // }

// <div>
   
//   <div className="container">
//     <ReactiveBase
//       app="VFAD-APP"
//       credentials="NUrMeJJo6:26af7ca7-82db-478d-80b0-ea00d5a4a916"
//       background-image=""
//       theme={{
//         primaryColor: '#FF3A4E',
//       }}
//     >
//       <nav className="nav"></nav>
        
//         <DataSearch
//           componentId="SearchSensor"
//           dataField="name"
//           autosuggest={false}
//           placeholder="Search by Location"
//           iconPosition="left"
//           className="search"
//           highlight={true}
//         />
     
    
//       <div className="left-col">
//         <DateRange
//           dataField="date_from"
//           componentId="DateRangeSensor"
//           title="When"
//           numberOfMonths={2}
//           queryFormat="basic_date"
//           initialMonth={new Date('2019-10-29')}
//         />

//         <NumberBox
//           componentId="GuestSensor"
//           dataField="accommodates"
//           title="Guests"
//           defaultSelected={2}
//           labelPosition="right"
//           data={{
//             start: 1,
//             end: 16,
//           }}
//         />

//         <RangeSlider
//           componentId="PriceSensor"
//           dataField="price"
//           title="Price Range"
//           range={{
//             start: 10,
//             end: 250,
//           }}
//           rangeLabels={{
//             start: '$10',
//             end: '$250',
//           }}
//           defaultSelected={{
//             start: 10,
//             end: 50,
//           }}
//           stepValue={10}
//           interval={20}
//           react={{
//             and: ['DateRangeSensor'],
//           }}
//         />
//       </div>

//       <ResultCard
//         className="right-col"
//         componentId="SearchResult"
//         dataField="name"
//         size={12}
//         onData={data => ({
//           image: data.image,
//           title: data.name,
//           description: (
//             <div>
//               <div className="price">${data.price}</div>
//               <p className="info">{data.room_type} · {data.accommodates} guests</p>
//             </div>
//           ),
//           url: data.listing_url,
//         })}
//         pagination
//         react={{
//           and: ['SearchSensor', 'GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
//         }}
//         innerClass={{
//           resultStats: 'result-stats',
//           list: 'list',
//           listItem: 'list-item',
//           image: 'image',
//         }}
//       />
    
//     </ReactiveBase>
    

    
   
  
  
     
//   </div>
  
 
//  </div>
 
// // );