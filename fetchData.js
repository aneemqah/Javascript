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

// Usage

const displayProducts = async () => {
  try {
    const products = await fetchData('https://dummyjson.com/products');
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

displayProducts();
