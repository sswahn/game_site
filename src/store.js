

export default function Store() {

  const create = data => {
    const store = JSON.parse(localStorage.getItem('store'))
    console.log('store:', store)
    localStorage.setItem('store', JSON.stringify({
      ...store, 
      ...data
    }))
  }

  const remove = (data = undefined) => {
    if (data !== undefined) {
      const store = JSON.parse(localStorage.getItem('store'))
      delete store[data]
      localStorage.setItem('store', JSON.stringify(store))
    } else {
      localStorage.clear()
    }
  }

  return { create, remove }
}