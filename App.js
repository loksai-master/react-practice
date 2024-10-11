import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutClass from './components/aboutClass';
import About from './components/about';
import { ImagePath } from './utils/consts';

// --------------------- creating react element --------------------
// const element = React.createElement(
//   "p",
//   {},
//   React.createElement("span", {}, "span element...!")
// );

// --------------------- creating react element using JSX -----------
// const headingElement = <h1>super simple dev</h1>


const Header=()=>{
	return(
		<div className="heading">
			<img className="main-logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJKFwMs2GJkAD8JkaKnmcRAHet9b98QhBgbrRWoI-IYsVEN6YhImxgwu1nMEyr5B4VK0&usqp=CAU'/>
			<ul className="nav-items">
				<li>Home</li>
				<li>About</li>
			</ul>
		</div>
	)
}

const Card=()=>{
	return(
		<div className='card'>
				<img src={ImagePath + 'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_344287.jpg'}/>
				<p>Varalaxmi Tiffins</p>
				<p>South Indian, Gachibowli</p>
				<p>₹300 for two</p>
			</div>
	)
}

const Body=()=>{
	return(
		<div className="main-container">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
}

const AppLayout=()=>{
	return(
		<div className='app'>
			<Header />
			<Body />
		</div>
	)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
