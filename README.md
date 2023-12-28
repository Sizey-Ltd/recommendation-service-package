# Recommendation Service

## Overview

This package provides a Recommendation Service for integrating size recommendations into your webshop or application.

## Installation

To use this Recommendation Service, you can install it via npm:

```bash
npm install recommendation-service

```
Here's how you can use this Recommendation Service in your webshop or application:

Import the package in your JavaScript/React code:

    import 'recommendation-service';


# Usage in React Project

    import RecommendationService from 'recommendation-service';

Use this syntax in you Component or where you are going to import this package
```html
    <span className="SizeyContainer" id="sizey-container" 
        data-upc="product-upc"
        data-productid="product-productid"
        data-brand="sizechart-brand"
        data-garment="garment-type"
        apikey='APIKEY'
        recommendation_link_text='Test your size'
        recommendation_button_text='Test My Size'
        showaslink="false">
        <div data-product-variations>
            <div data-variation-id="{VariationId}" 
                data-variation-ean="{VariationArticleNumber}">    
            </div>
        </div>
    </span>
```


# Usage in HTML Project

To include the Recommendation Service script in your HTML file, use the following code:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://raw.githack.com/Sizey-Ltd/recommendation-service-package/adding-recommendation-button/sizey-recommendation.min.js"></script>

<span className="SizeyContainer" id="sizey-container" 
    apikey="APIKEY"
    data-upc="product-upc"
    data-productid="product-productid"
    data-brand="sizechart-brand"
    data-garment="garment-type"
    recommendation_link_text='Test your size'
    recommendation_button_text='Test My Size'
    showaslink="false">
    <div data-product-variations>
        <div data-variation-id="{VariationId}" 
            data-variation-ean="{VariationArticleNumber}">    
        </div>
    </div>
</span>
```


# Recommendation Service(Options)
    apikey: Your API key (string).
    recommendation_link_text: Text for the recommendation link (string).
    recommendation_button_text: Text for the recommendation button (string).
    showaslink: Set to true to use a link, or false to use a button (string).
    data-upc: Your product UPC key (string).

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

UPC in Sizey portal. If this is set, brand, garment, and gender parameters can be omitted. To Obtain UPC follow these steps:

    1. Login to (https://portal.sizey.ai/).

    2. After successfully logging in, navigate to (https://portal.sizey.ai/my-products) within your Sizey Portal account.

    3. Here, you will see a "Create New Product" button in the user interface. Click on it to create a new product.

    4. You will be redirected to (https://portal.sizey.ai/my-products/new) page. Follow the instructions to set up and configure your product.

    5. As you create your product, make sure to add a suitable size chart for it.

    6. After setting up your product, you can create variations for your product. You will find an "Add Variation" button in the user interface. Click on it to add variations.

    7. As you add variations to your product, you will be able to access the UPC values specific to each variation.

    8. The UPC values represent different product variations, and you can use these values as input (upc-data) when using the Recommendation Service in your webshop or application.


## Obtaining productid-data for Your Products

To use the Recommendation Service, you'll need productId data for your products. Here's how you can obtain it:

Product id in Sizey portal. If this is set brand, garment and gender parameters can be omitted. To Obtain productId follow these stpes:

    1. Login to (https://portal.sizey.ai/).

    2. After successfully logging in, navigate to (https://portal.sizey.ai/my-products) within your Sizey Portal account.

    3. Here, you will see a "Create New Product" button in the user interface. Click on it to create a new product.

    4. You will be redirected to (https://portal.sizey.ai/my-products/new) page. Follow the instructions to set up and configure your product.

    5. As you create your product, make sure to add a suitable size chart for it.

    6. After setting up your product, you will be able to access the productId value.

    7. The productId value represent different products, and you can use these values as input (productId-data) when using the Recommendation Service in your webshop or application.

## Obtaining brand-data and garment-data

To use the Recommendation Service, you'll need brand data. Here's how you can obtain it:

Brand in Sizey portal. To use brand for size chart garment data is also required but upc and productId parameters can be omitted. To Obtain brand follow these stpes:

    1. Login to (https://portal.sizey.ai/).

    2. After successfully logging in, navigate to https://portal.sizey.dev/my-sizecharts within your Sizey Portal account.

    3. Here, you will see a "Create New Chart" button in the user interface. Click on it to create a new size chart.

    4. You will be redirected to https://portal.sizey.dev/my-sizecharts/new page. Follow the instructions to set up and configure your size chart.

    5. After setting up your size chart, you will be able to access the brand & garment value.

    6. The brand & garment value represent different size chart, and you can use these values as input when using the Recommendation Service in your webshop or application.
