const STORAGE_KEYS = {
  USERS: 'controletotal_users',
  PRODUCTS: 'controletotal_products',
  MOVEMENTS: 'controletotal_movements',
  CURRENT_USER: 'controletotal_current_user',
};

function getStorageData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function setStorageData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export const localStorageService = {
  getUsers() {
    return getStorageData(STORAGE_KEYS.USERS) || [];
  },

  saveUsers(users) {
    return setStorageData(STORAGE_KEYS.USERS, users);
  },

  addUser(user) {
    const users = this.getUsers();
    const newUser = { ...user, id: crypto.randomUUID() };
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  },

  getUserByUsername(username) {
    const users = this.getUsers();
    return users.find((u) => u.username === username) || null;
  },

  getProducts() {
    return getStorageData(STORAGE_KEYS.PRODUCTS) || [];
  },

  saveProducts(products) {
    return setStorageData(STORAGE_KEYS.PRODUCTS, products);
  },

  addProduct(product) {
    const products = this.getProducts();
    const newProduct = { ...product, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    products.push(newProduct);
    this.saveProducts(products);
    return newProduct;
  },

  updateProduct(id, updates) {
    const products = this.getProducts();
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updates };
      this.saveProducts(products);
      return products[index];
    }
    return null;
  },

  deleteProduct(id) {
    const products = this.getProducts();
    const filtered = products.filter((p) => p.id !== id);
    this.saveProducts(filtered);
    return true;
  },

  getMovements() {
    return getStorageData(STORAGE_KEYS.MOVEMENTS) || [];
  },

  saveMovements(movements) {
    return setStorageData(STORAGE_KEYS.MOVEMENTS, movements);
  },

  addMovement(movement) {
    const movements = this.getMovements();
    const newMovement = { ...movement, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    movements.push(newMovement);
    this.saveMovements(movements);
    return newMovement;
  },

  getCurrentUser() {
    return getStorageData(STORAGE_KEYS.CURRENT_USER);
  },

  setCurrentUser(user) {
    return setStorageData(STORAGE_KEYS.CURRENT_USER, user);
  },

  clearCurrentUser() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  clearAll() {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  },
};
