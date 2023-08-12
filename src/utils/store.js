class Store {
  data = {};

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    const result = localStorage.getItem(key);
    try {
      return JSON.parse(result) || {};
    } catch (e) {
      console.warn(e);
    }
    return {};
  }

  getOnce(key) {
    const result = this.get(key);
    this.remove(key);
    return result;
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

const store = new Store();
export default store;
