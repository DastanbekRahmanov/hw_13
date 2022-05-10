import React, { useState, useEffect } from 'react'
import './Fetch.css'
function Fetch() {
	let [data, setData] = useState([])
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
			.then((response) => response.json())
			.then((json) => setData(json))
	}, [])
	return (
		<div className='box'>
			{data.map((i) => {
				return (
					<div className='box2'>
						<div className='mini-wrapper'>
							<h3 className='title'>{i.title}</h3>
							<div className='id'>{i.id}</div>
						</div>
						<img src={i.url} alt='picture' className='img' />
					</div>
				)
			})}
		</div>
	)
}
export default Fetch
