
import Accordian from './Components/Accordian/index'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Randomcolor  from './Components/Randomcolor/index'
import StarRating from './Components/Starrating/index'
import Imagesider from './Components/Imagesider/index'
import Loadmoredata from './Components/Loadmoredata/index'
import Treeview from './Components/TreeVieworRecursivemenu/index'
import {menus} from './Components/TreeVieworRecursivemenu/data'
import QrCodegenerator from './Components/QrCodegenerator/index'
import Theme from './Components/ChangeTheme/index'
import Scroll from './Components/ScrollIndicator'
import Tabs from './Components/Tabsswitching'
import Modulepop from './Components/OpenModulepopup'
import Profile from './Components/Githubporfilefinder'
import Autocomplete from './Components/SearchAutocomplete'
import TicTacToe from './Components/Tic-Tac-Toe'
import Flag from './Components/FlagItems'
import Customhookusefetch from './Components/Usefecthcustomhook'
import OnClickOutside from './Components/useOnclickbutton'
import UseWindowresize from './Components/useWindowresize'
import ScrolltoTopandviceversa from './Components/ScrollTopandscrolltobottom'
import Particularsection from './Components/Scrolltoaparticular'
import Weather from './Components/WeatherApp'
import Homepage from './Components/Foodrecipe'
import {Details} from './Components/Foodrecipe/Details'
import {Favourites} from './Components/Foodrecipe/Favourites'
import {Home} from './Components/Foodrecipe/Home'
import Section from './Components/Foodrecipe/Section'
import Gobalstate from './Components/Foodrecipe/Context/index.jsx'
import Shopping from './Components/Shopingcart/Shopping.jsx'
import Navbar from './Components/Shopingcart/Navbar.jsx'
import Cart from './Components/Shopingcart/Cart.jsx'
function App() {

  return (
       <div>
        { <Homepage ></Homepage> }
        {/* <Navbar></Navbar>  */}
        <Routes>
          {/* <Route path='accordian' element={<Accordian></Accordian>}  ></Route>
          <Route path='color' element={<Randomcolor></Randomcolor>} ></Route>
          <Route path='rating' element={<StarRating stars={6} ></StarRating>} ></Route>
          <Route path='imagesider' element={<Imagesider></Imagesider>} ></Route>
          <Route path='loadmoredata' element={<Loadmoredata></Loadmoredata>}  ></Route>
          <Route path='Menuui' element={<Treeview list={menus}  ></Treeview>} ></Route>
          <Route path='Qrcode' element={<QrCodegenerator></QrCodegenerator>} ></Route>
          <Route path='Theme' element={<Theme></Theme>}  ></Route>
          <Route path='Scroll' element={<Scroll url={"https://dummyjson.com/products?limit=100"} ></Scroll>}></Route>
          <Route path='tabs' element={<Tabs></Tabs>} ></Route>
          <Route path='pop' element={<Modulepop></Modulepop>} ></Route>
          <Route path='profilefinder' element={<Profile></Profile>}></Route>
          <Route path='Complete' element={<Autocomplete></Autocomplete>} ></Route>
          <Route path='Tictactoe' element={<TicTacToe size={3}></TicTacToe>} ></Route>
          <Route path='unable' element={<Flag></Flag>} ></Route>
          <Route path='custom' element={<Customhookusefetch></Customhookusefetch> } ></Route>
          <Route path='onclickoutside' element={<OnClickOutside>  </OnClickOutside>} ></Route>
          <Route path='windowresize' element={<UseWindowresize></UseWindowresize> } ></Route>
          <Route path="toptobottom&bottomtotop" element={<ScrolltoTopandviceversa></ScrolltoTopandviceversa>} ></Route>
          <Route path='particular' element={<Particularsection></Particularsection>} ></Route>
          <Route path='weather' element={<Weather></Weather>} ></Route> */}
           <Route path='Details/:id' element={<Details></Details>} ></Route>
          <Route path='cart' element={<Favourites></Favourites>} ></Route>
          <Route path='home/:name'element={<Home></Home>} ></Route>
          {/* <Route path='cart' element={<Section></Section>} ></Route>  */}
          {/* <Route path='shopping' element={<Shopping></Shopping>}  ></Route>
          <Route path='cart' element={<Cart></Cart>}></Route> */}
           {/* <Route path='Tictactoe' element={<TicTacToe size={3}></TicTacToe>} ></Route> */}

         </Routes> 
       </div>
  )
}

export default App
