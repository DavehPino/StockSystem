const API_URL = "https://stock-system-backend.herokuapp.com/api/products/";

export const getProducts = async () => {
  return await fetch(API_URL);
};

export const getProductData = async (productId) => {
  return await fetch(`${API_URL}${productId}`)
}

export const updateProduct = async (productId, product) => {
  return await fetch(`${API_URL}${productId}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      "name":String(product.name).trim(),
      "price":Number(product.price),
      "description":String(product.description).trim(),
      "provider":String(product.provider).trim(),
      "brand":String(product.brand).trim(),
      "color":String(product.color).trim(),
    })
  })
}


export const addProduct = async (product) => {
  console.log(    JSON.stringify({
    "name":String(product.name).trim(),
    "price":Number(product.price),
    "description":String(product.description).trim(),
    "provider":String(product.provider).trim(),
    "brand":String(product.brand).trim(),
    "color":String(product.color).trim(),
  }))
  return await fetch(API_URL,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      "name":String(product.name).trim(),
      "price":Number(product.price),
      "description":String(product.description).trim(),
      "provider":String(product.provider).trim(),
      "brand":String(product.brand).trim(),
      "color":String(product.color).trim(),
    })
  })
}

export const deleteProduct = async (productId) => {
  return await fetch(`${API_URL}${productId}`, {
    method: "DELETE"
  })
}