import { ArrowBigLeftIcon,FilterIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListingCard from '../components/ListingCard';
import FilterSidebar from '../components/FilterSidebar';

const MarketPlace = () => {
  const navigate= useNavigate();
  const {listings} =useSelector(state=>state.listing);
  const [showFilterPhone,setShowFilterPhone]=useState(false);

  const [filters,setFilters]=useState({
    platform:null,
    maxPrice:10000,
    minFollowers:0,
    niche:null,
    verified:false,
    monetized:false,

  });

  const filteredListings=listings.filter((listing)=>{
        if(filters.platform&&filters.platform.length>0){
           
        }
          return true;
  })
  // because if redux  is not able to load the listing data the filter Listing at least have blank array and sorting can be apply  otherwise it will give sort function will not apply correctly

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex items-center justify-between text-slate-500'>
        <button onClick={()=>{navigate("/"); scrollTo(0,0)}} className='flex items-center gap-2 py-5'>
        <ArrowBigLeftIcon className='size-4'/>
        Back to Home 
        </button>
        <button onClick={()=>setShowFilterPhone(true)} className='flex sm:hidden items-center gap-2 py-5'>
          <FilterIcon className='size-4'/>
          Filters
        </button>
      </div>
      <div className=' relative flex items-start justify-between gap-8 pd-8'>

       <FilterSidebar setFilters={setFilters} filters={filters}  setShowFilterPhone={setShowFilterPhone}   showFilterPhone={showFilterPhone} />

        <div className='flex-1 grid xl:grid-cols-2 gap-4'>
          {filteredListings.sort((a,b)=>a.featured ? -1:b.featured?1:0).
          map((listing,index)=>(
            <ListingCard listing={listing} key ={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketPlace;
