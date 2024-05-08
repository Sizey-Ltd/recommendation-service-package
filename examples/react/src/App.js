import React from 'react';
import './App.css';
import { sizeyRecommendation } from 'recommendation-service';

function App() {
  useEffect(() => {
      sizeyRecommendation();
    }, []);
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
               data-upc={1234567890}
               apikey='testapikey'
               recommendation_link_text='Test your size'
               recommendation_button_text='Test My Size'
               showaslink='true'>
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
