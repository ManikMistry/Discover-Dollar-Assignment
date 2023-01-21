import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <p>© 2022-2023, Store-e.com, Inc. or its affiliates</p>
        <div className='icons'>
        <FacebookIcon className='fb'/>
        <TwitterIcon className='fb'/>
        <InstagramIcon className="fb"/>
        </div>
        
      
    </div>
  )
}

export default Footer
