import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const Lesson = () => {
    const {id} = useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('../vocbolary.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  
    const matchData = [...data.filter(singledata => singledata.lesson_no===parseInt(id))];
    console.log(matchData)
    return (
        <div>
            <h1 className='text-center  text-xl md:text-5xl font-bold  '>Lesson No :{id}</h1>
           
            <div  className='grid md:grid-cols-2 lg:grid-cols-2 w-11/12 mx-auto mt-12 gap-2'>
               {
                matchData.map(singleData=><Card  singleData={singleData}></Card>)
               }


            </div>
            <div className='flex justify-center mt-12'>
                <NavLink to={`/learning`} className='btn btn-neutral bg-[#9660ea] text-white'>Back to Lesson</NavLink>

            </div>
        </div>
    );
};

export default Lesson;