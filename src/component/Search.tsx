import React, { useEffect, useState } from 'react';
import '../style/search.css'
import { FilmsInt } from '../model/model';
import Card from './Card';



const Search:React.FC = () => {
    console.log("merci");
    const [listFilm, setListFilm] = useState<FilmsInt[] | null>(null);
const [search, setSearch] = useState<string | null>()
useEffect(() => {

    const getFilms = async() => {
       const response =  await   fetch('http://localhost:3003/film');
       const data :FilmsInt[]= await response.json();
       console.log(data);
       setListFilm(data);
    };
    getFilms();
    },[]);
  /*axios.get('http://localhost:3003/film')
.then((res)=> setListFilm(res))
.then((res) => console.log(  [res]))
    }, [])*/
    return (
        <div className='form-component'>
           
            
           
            <div className='result'>
             
               <Card  allFilms={listFilm}/>
            </div>
            
        </div>
    );
};

export default Search;