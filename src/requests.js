// Requests
const BASE_URL = "http://localhost:3000/api/v1";

// Create a helper module to make fetch requests to get, post, getOne, update products
const Product = {
  // fetch all products from server
  all() {
    return fetch(`${BASE_URL}/products`, {
      credentials: 'include' }).then(res => res.json());
  },
  // fetch a single product
  one(id) {
    return fetch(`${BASE_URL}/products/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // creating a product
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // updating a product
  update(id, params) {
		return fetch(`${BASE_URL}/products/${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
		}).then((res) => res.json());
	}
};

// Helper module to sign users in
// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
  create(params) {
    // `params` is an object that represents a user
		// { email: 'some@email.com', password: 'some-password' }
    return fetch(`${BASE_URL}/session`, {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}

export { Product, Session };