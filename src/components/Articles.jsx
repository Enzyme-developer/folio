import React, { useEffect, useState } from 'react'
import Article from './Article'

const Articles = () => {
  const [articles , setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch ('https://dev.to/api/articles?username=ayo_dev')
    const data = await response.json()
    setArticles(data.slice(0,3))
    console.log(data)
    }

    fetchData()
  }, [])

  
  return (
      <div id='articles' className='p-4 my-20'>
        <h1 className='text-white text-4xl mb-8'>Selected Articles</h1>
        <Article articles={articles} />
    </div>
  )
}

export default Articles