-> create
vite is used to create a react-ts template
https://vitejs.dev/
"npm create vite@latest . --template react"

after is install a react router
https://reactrouter.com/en/main/start/tutorial
"npm install react-router-dom"

->Imports in app
BrownserRouter - is used to connect with the brownser
Routes - is for embed the routes (rotas), as her parent
Route - is the Route by herself, single page

-> Route
for route we have the path, "path='/'" is for home
element={} - can apply what will show in the page, like "element={<Home/>}" where we have a component

->Link
import {Link} from 'react-router-dom'
use Link can allow we make a link (duh) for the page we want (maybe can solution the problem in my footer
 in the project - "https://github.com/FabioDiasRC/react_typescript_produtos")

-> Error handle
we can make  a Route with path='*' and apply a especific element for handle the error, now what ever the wrong way the links go will be redirected for the element in that Route.

-> Outlet component
share the layout across the pages, used for nested pages with Route

-> Navlink component
change the initial visualition, make more understendable for a navbar

-> url params
in the route we can apply a product id ass parameter for especifics products, very useful for dont need make a single page for each product

<route path='products' elements={<Products/>}>
<route path='products/:productId' elements={<SingleProducts/>}>

for make that work is necessary use a hook call 'useParams' from react-router-dom
insideTheFunction() {
  const {productId} = useParams();
}