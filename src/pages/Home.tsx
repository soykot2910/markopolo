import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchUsers} from '../redux/slices/userSlice'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


  return (
    <div>Home</div>
  )
}

export default Home