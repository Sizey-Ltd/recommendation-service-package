import React from 'react';
import './App.css';
import 'recommendation-service';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="search-wrapper">
          <div className="search-results" id="results">
            Click this link/button to open Sizey recommendation popup
          </div>
          <br />
          <span className="SizeyContainer" 
               id="sizey-container" 
               data-brand="brand123"
               data-garment="full-body"
               apikey='WjNHWFgwbkJLcXNTdFNwOExoUlA6bUZqaXJIbW4'
               recommendation_link_text='Test your size'
               recommendation_button_text='Test My Size'
               showaslink='false'>
            <div data-product-variations>
              <div data-variation-id="{VariationId}" data-variation-ean="{VariationArticleNumber}"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
