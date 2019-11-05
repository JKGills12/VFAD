// import React, { Component } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

$(function () {

    $("#search-query").autocomplete({
        source: function (request, response) {
           $.ajax({
              url: "/search_member",
              type: "GET",
              data: request,  // request is the value of search input
              success: function (data) {
                // Map response values to fiedl label and value
                 response($.map(data, function (el) {
                    return {
                       label: el.fullname,
                       value: el._id
                    };
                    }));
                 }
              });
           },
           
           // The minimum number of characters a user must type before a search is performed.
           minLength: 3,
           
           // set an onFocus event to show the result on input field when result is focused
           focus: function (event, ui) {
              this.value = ui.item.label;
              // Prevent other event from not being execute
              event.preventDefault();
           },
           select: function (event, ui) {
              // Prevent value from being put in the input:
              this.value = ui.item.label;
              // Set the id to the next input hidden field
              $(this).next("input").val(ui.item.value);
              // Prevent other event from not being execute            
              event.preventDefault();
              // optionnal: submit the form after field has been filled up
              $('#quicksearch').submit();
           }
    });
  
  });

// class Search extends Component {
//   state = {
//     search: "",
//     breeds: [],
//     results: [],
//     error: ""
//   };

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getBaseBreedsList()
//       .then(res => this.setState({ breeds: res.data.message }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Breed!</h1>
//           <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             breeds={this.state.breeds}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;

