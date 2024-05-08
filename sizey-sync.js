const sizeySync = () => {
  const createProducts = async (products, apiKey) => {
    let productsCreated = 0;
    let terminateOnError = false;
    let result;
    const falseProducts = products.filter((e) => !e?.attributes?.id || !e?.attributes?.name);
    const correctProducts = products.filter((product) => !falseProducts.includes(product));

    for (const product of correctProducts) {
      try {
        const apiUrl = `https://vroom-api.sizey.ai/integration/shopify/product/${product.attributes.id}`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-sizey-key': apiKey
          },
          body: JSON.stringify(product)
        });

        if (response.status === 401) {
          terminateOnError = true;
          throw new Error('Unauthorized');
        }

        result = await response.json();
        productsCreated++;
      } catch (error) {
        if (terminateOnError) {
          alert('Unauthorized access. Process terminated.');
          console.error(error);
          return;
        } else {
          alert(`Error creating product: see logs`);
          console.error(error);
        }
      }
    }

    if (falseProducts.length > 0) {
      const message = falseProducts.map((e) => {
          if (!e.attributes) {
              return `Product with missing attributes`;
          } else {
              return `${(e.attributes?.name || e.attributes?.id)} is falsy`;
          }
      }).join('\n');
      alert(`\n${message}`);
    }
  
    if (productsCreated === products.length) {
      console.log('Product created:', result);
      alert('All products have been created successfully!');
    }
  };

  window.addEventListener('load', async () => {
    const sizeyContainer = document.querySelector('#sizey-container');
    if (!sizeyContainer) {
      alert('sizey-container not found.');
      return;
    }

    const apiKey = sizeyContainer.getAttribute('apikey');
    if (!apiKey) {
      alert('API key not provided.');
      return;
    }

    const productsDataString = sizeyContainer.getAttribute('data-products');

    try {
      const productsData = JSON.parse(productsDataString);
      if (!productsData || !Array.isArray(productsData)) {
        throw new Error('Invalid product data.');
      }

      const syncLinkText = sizeyContainer.getAttribute('sync_link_text') || 'Sync Products';
      const showAsLink = sizeyContainer.getAttribute('showaslink') === 'true';

      if (showAsLink) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = syncLinkText;
        link.addEventListener('click', async () => {
          await createProducts(productsData, apiKey);
        });
        sizeyContainer.appendChild(link);
      } else {
        const button = document.createElement('button');
        button.textContent = syncLinkText;
        button.addEventListener('click', async () => {
          await createProducts(productsData, apiKey);
        });
        sizeyContainer.appendChild(button);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  });
}

export { sizeySync };