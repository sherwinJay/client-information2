import Link from 'next/link';
import Image from 'next/image';
import { css, cx } from '@emotion/css'
import { navData } from '../NavItems';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { sidebarContainer, sidebarMenu, sideNavLinks, iconWrapper, logoutBtn } from './styles';
import {FaTimes} from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/client';




const Sidebar = ({isOpen, toggle}) => {

	const router = useRouter();
	const [ session ] = useSession();

	const getNavItems = navData.map((navItem, idx) => {
		return (
			<li key={idx}>
				<Link href={navItem.link}>
					<a className={`${sideNavLinks} ${router.pathname == navItem.link ? 'active-mob' : ''}`}>
						{navItem.name}
					</a>
				</Link>
			</li>
		)
	})

	return (
		<>
			<div className={sidebarContainer({ isOpen })} onClick={toggle}>
				<div className={iconWrapper} onClick={toggle}>
					<FaTimes />
				</div>
				<ul className={sidebarMenu}>
					{ 
						session ? ( getNavItems) : (<></> ) 
					}
				</ul>
				<a className={logoutBtn} onClick={() => signOut()}> 
					Logout
				</a>
			</div>
		</>
		
	)
}

export default Sidebar
