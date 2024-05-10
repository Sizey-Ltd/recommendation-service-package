import React from 'react';
import './App.css';
import 'recommendation-service';

{/* You can add any of data-parameters (data-upc or data-productid or [data-brand & data-garment]) */}
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="search-wrapper">
          <div className="search-results" id="results">
            Click this link/button to open Sizey recommendation popup
          </div>
          <br />
          <span
            id="sizey-container" 
            apikey="your-apikey"
            data-upc="upc-value"
            data-productid="productId"
            data-brand="test-brand"
            data-garment="test-garment"
            recommendation_link_text="Test your size"
            recommendation_button_text="Test My Size"
            showaslink="false">
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
