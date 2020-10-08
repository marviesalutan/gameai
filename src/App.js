import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [int, setint] = useState(0)

	useEffect(() => {
		if (int === 0) return

		setTimeout(() => {
			setint(int + 0.1)
		}, 10)
	}, [int])

	return (
		<>
			<div
				className='background'
				style={{ marginLeft: `-${int}vw`, width: `${int + 100}vw` }}
			/>
			<div className='vertical-center'>
				<div className='horizontal-center'>
					<button
						className='button'
						onClick={() => {
							setint(0.1)
						}}
					>
						START
					</button>
				</div>
			</div>
			<div className='character'>
      </div>
		</>
	)
}

export default App
