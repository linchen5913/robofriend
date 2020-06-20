import React, {useRef, useEffect} from 'react';

const Searchbox = ({ searchChange }) =>{
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robot' 
                onChange={searchChange} 
                ref={inputRef}
            />
        </div>
    )

}

export default Searchbox;