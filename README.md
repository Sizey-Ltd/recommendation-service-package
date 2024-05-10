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


# Usage in HTML Project

To include the Recommendation Service script in your HTML file, use the following code:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://rawcdn.githack.com/Sizey-Ltd/recommendation-service-package/dcd2c2842b6821ca55acbdb0206fc0d2b2f7071f/sizey-recommendation.min.js" type="module"></script>

<span
    id="sizey-container" 
    apikey="your-apikey"
    data-upc="upc-value"
    data-productid="productId"
    data-brand="test-brand"
    data-garment="test-garment"
    recommendation_link_text="Test your size"
    recommendation_button_text="Test My Size"
    showaslink="true">
</span>
```


# Recommendation Service(Options)

When initializing the Recommendation Service, provide the following options:

- **apikey:** Your API key (string).
- **recommendation_link_text:** Text for the recommendation link (string).
- **recommendation_button_text:** Text for the recommendation button (string).
- **showaslink:** Set to true to use a link, or false to use a button (string).

Additionally, include one of the following parameters:

- **data-upc:** Your product UPC key (string).
- **data-productid:** Your product ID key (string).
- **data-brand & data-garment:** Your product brand & garment key (string).

**Note:** At least one of the parameters (`data-upc`, `data-productid`, [`data-brand`& `data-garment`]) is required for the Recommendation Service to function correctly. You can choose the one that best fits your implementation.

## Obtaining Your API Key

To use the Recommendation Service, you'll need an API key. Here's how you can obtain one:

    1. Visit (https://portal.sizey.ai/) and register your account.

    2. Once you've successfully registered and logged in, navigate to the "Company Information" page.

    3. Select a suitable plan for your company on the Sizey Portal.

    4. After successfully completing the registration and setup, you will have access to your own company account on the portal.

    5. To obtain your API key, go to (https://portal.sizey.ai/my-apikeys) within your Sizey Portal account.

    6. Here, you will find your unique API key. Copy this key and use it when initializing the Recommendation Service in your project.


## Obtaining data-parameters for Your Products

To use the Recommendation Service, you'll need some data-parameters for your products. Here's how you can obtain it:

    1. Login to (https://portal.sizey.ai/).

    2. After successfully logging in, navigate to (https://portal.sizey.ai/my-products) within your Sizey Portal account.

    3. Here, you will see a "Create New Product" button in the user interface. Click on it to create a new product.

    4. You will be redirected to (https://portal.sizey.ai/my-products/new) page. Follow the instructions to set up and configure your product.

    5. As you create your product, make sure to add a suitable size chart for it.

    6. After setting up your product, you can create variations to access the following details:

   - **UPC Data:** The UPC values represent different product variations. You can use these values as input (upc-data) when using the Recommendation Service.
   - **ProductID Data:** The productId value represents different products, and you can use these values as input (productId-data) when using the Recommendation Service.

   
## Obtaining brand-data and garment-data

To use the Recommendation Service, you'll need brand and garment data. Here's how you can obtain it:

    1. Login to (https://portal.sizey.ai/).

    2. After successfully logging in, navigate to https://portal.sizey.ai/my-sizecharts within your Sizey Portal account.

    3. Here, you will see a "Create New Chart" button in the user interface. Click on it to create a new size chart.

    4. You will be redirected to https://portal.sizey.ai/my-sizecharts/new page. Follow the instructions to set up and configure your size chart to access the following details:

   - **Brand & Garment Data:** The Brand & Garment values represent different size chart. You can use these values as input when using the Recommendation Service.