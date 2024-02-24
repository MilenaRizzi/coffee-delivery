import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Success } from '../pages/Success'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Cart } from '../pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>} />
      </Route>
    </Routes>
  )
}