import React from 'react'
import './Nav.scss'
const Nav = ({ sections ,active}) => {

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        })

    }

    return (
        <nav>
            {sections.map(({name, ref}) => (
                <button
                    key={name}
                    onClick={()=>scrollTo(ref)}
                    className={active===name? 'active':''}
                >
                    {name}
                </button>

            ))}


        </nav>
    )
}

export default Nav