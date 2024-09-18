require('dotenv').config();

export async function fetchProducts() {
    const query = `
      {
        products(first: 16) {
          edges {
            node {
              id
              title
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
  

    const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN;
  
    if (!storeDomain || !accessToken) {
      console.error('Environment variables are not loaded correctly');
      return [];
    }
  
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': `${accessToken}`,
    };
  
    try {
      const url = `https://${storeDomain}/api/2024-07/graphql.json`;
      console.log('Fetching from URL:', url);
  
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const jsonResponse = await response.json();
      const products = jsonResponse.data.products.edges.map((edge) => edge.node);
      console.log(products);
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  