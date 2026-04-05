import { Routes,Route, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";
import Loading from "./pages/Loading";
import ManageListing from "./pages/ManageListing";
import MyListings from "./pages/MyListings";
import MyOrders from "./pages/MyOrders";
import Message from "./pages/Messages";
import MarketPlace from "./pages/Marketplace";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import {Toaster} from 'react-hot-toast'
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AllListings from "./pages/admin/AllListings";
import CredentialChange from "./pages/admin/CredentialChange";
import CredentialVerify from "./pages/admin/CredentialVerify";
import Transactions from "./pages/admin/Transactions";
import Withdrawal from "./pages/admin/Withdrawal";

function App() {
  const {pathname}=useLocation();

  
  return (
    <div>
      <Toaster/>
      {!pathname.includes('/admin') && <Navbar/>}
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/listing/:listingId" element={<ListingDetails/>}/>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/create-listing/" element={<ManageListing/>}/> 
          <Route path="/edit-listing/:id" element={<ManageListing/>}/> 
          <Route path="/marketplace" element={<MarketPlace/>}/>
          <Route path="/messages" element={<Message/>}/>
          <Route path="/my-listings" element={<MyListings/>}/>
          <Route path="/my-orders" element={<MyOrders/>}/>

           <Route path="/admin" element={<Layout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='verify-credentials' element={<CredentialVerify/>}/>
                <Route path='change-credentials' element={<CredentialChange/>}/>
                <Route path='list-listings' element={<AllListings/>}/>
                <Route path='transactions' element={<Transactions/>}/>
                <Route path='withdrawal' element={<Withdrawal/>}/>
           </Route>
       </Routes>

       <ChatBox/>
    </div>
  )
}

export default App
