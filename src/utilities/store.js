
export default function Store() {

  const create = data => {
    localStorage.setItem('store', JSON.stringify(data))
  }

  const add = data => {
    const store = JSON.parse(localStorage.getItem('store'))
    const item = { ...store, ...data }
    localStorage.setItem('store', JSON.stringify(item))
  }

  const removeItem = item => {
    if (item !== String) {
      return console.error('Param must be a string.')
    }
    const store = JSON.parse(localStorage.getItem('store'))
    delete store[item]
    localStorage.setItem('store', JSON.stringify(store))
  }

  const remove = () => {
      localStorage.clear()
  }

  return { create, add, remove }
}