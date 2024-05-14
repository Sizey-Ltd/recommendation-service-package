# Recommendation Service

## Overview

This package provides Sizey Size Recommendations and Product Data Synchronizing services for integrating your online sales platform or product data management system (like ERP or PIM) with Sizey Hub.

To setup your company’s service account in Sizey Hub, go to https://portal.sizey.ai

## Installation

To use this Recommendation Service, you can install it via npm:

```bash
npm install recommendation-service

```
Here's how you can use this Recommendation Service and Product Synchronization in your webshop or application:

Import the package in your JavaScript/React code:

    import { sizeySync } from 'recommendation-service';  // For Sync products with sizey

    import { sizeyRecommendation } from 'recommendation-service';  // For Recommendation service


# Usage in React Project

## Usage of Recommendation Service

To use the Recommendation service, follow these steps:

1. Import the `sizeyRecommendation` function from the `recommendation-service` package:

    ```javascript
    import { sizeyRecommendation } from 'recommendation-service';
    ```

2. Add the following HTML code to your component where you want to integrate the Recommendation service:

    ```html
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
    ```

## Usage of Product Synchronization

To use the Product synchronization feature, follow these steps:

1. Add the following HTML code to your component where you want to integrate the Product synchronization:

    ```html
    <span 
        id="sizey-sync-container" 
        apikey="your-apikey"
        data-products='[
            {
                "attributes": {
                    "id": "product_id",
                    "name": "Product name",
                    "brandName": "Brand name",
                    "productType": "type of product",
                    "description": "General description",
                    "variations": [
                        {
                            "color": "Black",
                            "size": "L",
                            "eanCode": "VariationId",
                            "fabric": "Cotton",
                            "isValid": true
                        }
                    ],
                    "isPublic": true
                }
            }
        ]'
        sync_link_text="Sync Products"
        showaslink="false">
    </span>
    ```

## Styling the Buttons
 - To style the Recommendation service button, use the `.recommendation-service-button` class.
 - To style the Sync Product button, use the `.sync-product-button` class.

# Usage in HTML Project

## Usage of Sizey Recommendation

To include the sizey Recommendation Service script in your HTML file, use the following code:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://rawcdn.githack.com/Sizey-Ltd/recommendation-service-package/5a62a06770c76a1cdbcf2fd1aa16bee8b999151e/sizey-recommendation.min.js"></script>

<span 
    id="sizey-container" 
    apikey='your-apikey'
    data-upc="upc-value"
    data-productid="productId"
    data-brand="test-brand"
    data-garment="test-garment"
    recommendation_link_text="Test your size"
    recommendation_button_text="Test My Size"
    showaslink="false">
</span>
```

## Usage of Product Synchronization

To include the Product Synchronization script in your HTML file, use the following code:
 
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://rawcdn.githack.com/Sizey-Ltd/recommendation-service-package/5a62a06770c76a1cdbcf2fd1aa16bee8b999151e/sizey-sync.min.js" type="module"></script>

    <span 
        id="sizey-sync-container" 
        apikey="your-apikey"
        data-products='[
            {
                "attributes": {
                    "id": "product_id",
                    "name": "Product name",
                    "brandName": "Brand name",
                    "productType": "type of product",
                    "description": "General description",
                    "variations": [
                        {
                            "color": "Black",
                            "size": "L",
                            "eanCode": "VariationId",
                            "fabric": "Cotton",
                            "isValid": true
                        }
                    ],
                    "isPublic": true
                }
            }
        ]'
        sync_link_text="Sync Products"
        showaslink="false">
    </span>
```




# Sizey Service(Options)

When initializing the Recommendation Service, provide the following options:

- **apikey:** Your API key (string).
- **recommendation_link_text:** Text for the recommendation link (string).
- **recommendation_button_text:** Text for the recommendation button (string).
- **showaslink:** Set to true to use a link, or false to use a button (string).
- **data-products:** Array of product which need to sync with sizey (Array of object).
- **sync_link_text:** Text for the sync button (string).
- **data-upc:** Your product UPC key (string).
- **data-productid:** Your product ID key (string).
- **data-brand & data-garment:** Your product brand & garment key (string).

**Note:** At least one of the parameters (`data-upc`, `data-productid`, [`data-brand`& `data-garment`]) is required for the `Sizey Recommendation Service` to function correctly. You can choose the one that best fits your implementation.

## Obtaining Your API Key

To use the Recommendation Service, you'll need an API key. Here's how you can obtain one:

    1. Visit (https://portal.sizey.ai/) and register your account.

    2. Once you've successfully registered and logged in, navigate to the "Company Information" page.

    3. Select a suitable plan for your company on the Sizey Portal.

    4. After successfully completing the registration and setup, you will have access to your own company account on the portal.

    5. To obtain your API key, go to (https://portal.sizey.ai/my-apikeys) within your Sizey Portal account.

    6. Here, you will find your unique API key. Copy this key and use it when initializing the Recommendation Service in your project.


## Obtaining upc-data for Your Products

To use the Recommendation Service, you'll need UPC data for your products. Here's how you can obtain it:

    1. Login to (https://portal.sizey.ai/).

    2. After successfully logging in, navigate to (https://portal.sizey.ai/my-products) within your Sizey Portal account.

    3. Here, you will see a "Create New Product" button in the user interface. Click on it to create a new product.

    4. You will be redirected to (https://portal.sizey.ai/my-products/new) page. Follow the instructions to set up and configure your product.

    5. As you create your product, make sure to add a suitable size chart for it.

    6. After setting up your product, you can create variations for your product. You will find an "Add Variation" button in the user interface. Click on it to add variations.

    7. As you add variations to your product, you will be able to access the UPC values specific to each variation.

    8. The UPC values represent different product variations, and you can use these values as input (upc-data) when using the Recommendation Service in your webshop or application.



