import React, { useEffect } from 'react';
import './App.css';
import { sizeyRecommendation, sizeySync } from 'recommendation-service';


function App() {
  const isRecommendation = true; // change it to false to switch into Sync products

  useEffect(() => {
    if (isRecommendation) {
      sizeyRecommendation();
    } else {
      sizeySync();
    }
  }, [isRecommendation]);

  return (
    <div className="App">
      <div className="container">
        <div className="search-wrapper">
          Click this link/button for Recommendation Service or Synchronize products
        {isRecommendation ? (
            <span
              id="sizey-container"
              data-upc={1234567890}
              apikey='testapikey'
              recommendation_link_text='Test your size'
              recommendation_button_text='Test My Size'
              showaslink='false'>
            </span>
          ) : (
            <span 
              id="sizey-container" 
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
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
