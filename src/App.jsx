import './index.css'
import { menu, category } from './data'
import Header from './components/Header'
import Footer from './components/Footer'
import CategoryList from './components/CategoryList'
import MenuList from './components/MenuList'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState("")

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <CategoryList data={category} />
      <div className='grid gap-y-5'>
        {menu.map((item, i) => (
          <MenuList id={category[i].name} key={i} data={item} query={query} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
