import React, { useEffect, useState } from 'react';
import './App.css';
import { sizeyRecommendation, sizeySync } from 'recommendation-service';


function App() {

  const [recommendedSize, setRecommendedSize] = useState(sessionStorage.getItem('sizey-recommendation-size'));

  useEffect(() => {
    sizeyRecommendation();

    const handleMessage = (e) => {
      const mv = e.data;
      if (mv.event === "sizey-recommendations") {
        const size = mv?.recommendations[0].size;
        if (size) {
          sessionStorage.setItem('sizey-recommendation-size', size);
          setRecommendedSize(sessionStorage.getItem('sizey-recommendation-size'));
        }
      }
    };

    window.addEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
      sizeyRecommendation();
      sizeySync();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="search-wrapper">
          Click this link/button for Recommendation Service or Synchronize products
            <span
              id="sizey-container"
              data-upc={1234567890}
              apikey='testapikey'
              recommendation_link_text='Test your size'
              recommendation_button_text='Test My Size'
              showaslink='false'>
            </span>
            <br />
            <div id="recommendation-message">
              {recommendedSize ? `Recommendation size: ${recommendedSize}` : ''}
            </div>
            <span 
              id="sizey-sync-container" 
              apikey="your-apikey"
              data-products='[
                {
                  "attributes": {
                      "id": "product Id",
                      "name": "Product name",
                      "garment": null,
                      "checked": false,
                      "brandName": "Brand Name",
                      "productType": "type of product",
                      "description": "General description",
                      "variations": [
                          {
                              "color": "Black",
                              "size": "L",
                              "eanCode": "upcCodevariation",
                              "fabric": "Elastan",
                              "isValid": true
                          }
                      ],
                      "isPublic": true
                  }
                },
                {
                  "attributes": {
                      "id": "product name",
                      "name": "Product without Variations",
                      "garment": null,
                      "checked": false,
                      "brandName": "Brand Name",
                      "productType": "type of product",
                      "description": "General description",
                      "variations": [],
                      "isPublic": true
                  }
                }
              ]'
              sync_link_text="Sync Products"
              showaslink="false">
            </span>
        </div>
      </div>
    </div>
  );
}

export default App;
