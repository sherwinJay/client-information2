import Header from "./Header"
import { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<>
			<Header toggle={toggle}/>
			<Sidebar toggle={toggle} isOpen={isOpen} />
			{ children }
		</>
	)
}

export default Layout
