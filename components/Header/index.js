import Link from 'next/link';
import Image from 'next/image';
import { css, cx } from '@emotion/css'
import { mainNav, mainNavLink, mainHeaderContainer, mainHeader, mobileIcon, logoutBtn } from './styles';
import { navData } from '../NavItems';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';
import { FaBars } from "react-icons/fa";


const Header = ({ db, toggle }) => {
	const router = useRouter();
	const [ session ] = useSession();
	const [user, setUser] = useState(null);

	const getNavItems = navData.map((navItem, idx) => {
		return (
			<li key={idx}>
				<Link href={navItem.link}>
					<a className={`${mainNavLink} ${router.pathname == navItem.link ? 'active' : ''}`}>
						{navItem.name}
					</a>
				</Link>
			</li>
		)
	})

	return (
		<header className={ mainHeaderContainer }>
			<div className={ mainHeader } >
				<Link href="/">
					<a>
						LOGO
					</a>
				</Link>
				{
					session ? (
						<nav className={ mainNav }>
							<ul>
								{getNavItems}
							</ul>
						</nav>
					) : (
						<></>
					)
				}
				<div className="btn-test-wrapper">
					{
						!session ? (
							<a className="blue-btn" onClick={() => signIn()}> 
								Login
							</a>
						) : (
							<>
								<a className={logoutBtn} onClick={() => signOut()}> 
									Logout
								</a>
								<div className={mobileIcon}>
									<FaBars onClick={toggle} />
								</div>
							</>
						)
					}
				</div>
			</div>
		</header>
	)
}

export default Header
