const fetchData = async (dataUrl) => {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed fetching data:', error.message);
  }
};

// fetch all products from the API
const fetchAllProducts = async () => {
  try {
    const products = await fetchData('https://dummyjson.com/products');
    // products object | products prop
    if (products && products.products) {
      return products.products;
    } else {
      console.error('No valid products found in the response.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Function to filter products with a rating above 4
const filterHighRatedProducts = (products) => {
  return products.filter((product) => product.rating > 4);
};

// Function to display high-rated products
const displayHighRatedProducts = async () => {
  try {
    const allProducts = await fetchAllProducts();
    const highRatedProducts = filterHighRatedProducts(allProducts);
    console.log('Products with a rating above 4:', highRatedProducts);
  } catch (error) {
    console.error('Error displaying high-rated products:', error);
  }
};

displayHighRatedProducts();
