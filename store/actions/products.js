import { db } from '../../firebase';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const productsRef = db.ref('products');
      const snapshot = await productsRef.once('value');
      const productsData = snapshot.val();

      const loadedProducts = [];
      console.log("jjjjjjjjjjj",loadedProducts)

      for (const key in productsData) {
        loadedProducts.push({
          id: key,
          ...productsData[key]
        });
      }

      dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts
      });
    } catch (err) {
      console.error(err);
 throw new Error('Something went wrong!');
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      const productRef = db.ref(`products/${productId}`);
      await productRef.remove();

      dispatch({ type: DELETE_PRODUCT, pid: productId });
    } catch (err) {
      // Handle error
      console.error(err);
       throw new Error('Something went wrong!');
    }
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch) => {
    try {
      const productsRef = db.ref('products');
      const newProductRef = productsRef.push();
      const newProductData = {
        title,
        description,
        imageUrl,
        price
      };

      await newProductRef.set(newProductData);

      dispatch({
        type: CREATE_PRODUCT,
        productData: {
          id: newProductRef.key,
          ...newProductData
        }
      });
    } catch (err) {
      // Handle error
      console.error(err);
       throw new Error('Something went wrong!');
    }
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return async (dispatch) => {
    try {
      const productRef = db.ref(`products/${id}`);
      const updatedProductData = {
        title,
        description,
        imageUrl
      };

      await productRef.update(updatedProductData);

      dispatch({
        type: UPDATE_PRODUCT,
        pid: id,
        productData: updatedProductData
      });
    } catch (err) {
      // Handle error
      console.error(err);
       throw new Error('Something went wrong!');
    }
  };
};


// import Product from '../../models/product';

// export const DELETE_PRODUCT = 'DELETE_PRODUCT';
// export const CREATE_PRODUCT = 'CREATE_PRODUCT';
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
// export const SET_PRODUCTS = 'SET_PRODUCTS';

// export const fetchProducts = () => {
//   return async (dispatch, getState) => {
//     // any async code you want!
//     const userId = getState().auth.userId;
//     try {
//       const response = await fetch(
//         'https://rn-complete-guide.firebaseio.com/products.json'
//       );

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const resData = await response.json();
//       const loadedProducts = [];

//       for (const key in resData) {
//         loadedProducts.push(
//           new Product(
//             key,
//             resData[key].ownerId,
//             resData[key].title,
//             resData[key].imageUrl,
//             resData[key].description,
//             resData[key].price
//           )
//         );
//       }

//       dispatch({
//         type: SET_PRODUCTS,
//         products: loadedProducts,
//         userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
//       });
//     } catch (err) {
//       // send to custom analytics server
//       throw err;
//     }
//   };
// };

// export const deleteProduct = productId => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const response = await fetch(
//       `https://rn-complete-guide.firebaseio.com/products/${productId}.json?auth=${token}`,
//       {
//         method: 'DELETE'
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Something went wrong!');
//     }
//     dispatch({ type: DELETE_PRODUCT, pid: productId });
//   };
// };

// export const createProduct = (title, description, imageUrl, price) => {
//   return async (dispatch, getState) => {
//     // any async code you want!
//     const token = getState().auth.token;
//     const userId = getState().auth.userId;
//     const response = await fetch(
//       `https://rn-complete-guide.firebaseio.com/products.json?auth=${token}`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title,
//           description,
//           imageUrl,
//           price,
//           ownerId: userId
//         })
//       }
//     );

//     const resData = await response.json();

//     dispatch({
//       type: CREATE_PRODUCT,
//       productData: {
//         id: resData.name,
//         title,
//         description,
//         imageUrl,
//         price,
//         ownerId: userId
//       }
//     });
//   };
// };

// export const updateProduct = (id, title, description, imageUrl) => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const response = await fetch(
//       `https://rn-complete-guide.firebaseio.com/products/${id}.json?auth=${token}`,
//       {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title,
//           description,
//           imageUrl
//         })
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Something went wrong!');
//     }

//     dispatch({
//       type: UPDATE_PRODUCT,
//       pid: id,
//       productData: {
//         title,
//         description,
//         imageUrl
//       }
//     });
//   };
// };
