import React from 'react'
import Footer from './footer.component'
import main from '../assets/main.jpg'

export default function Home() {
  return (
    <div>
        <div className='container'>
        <img src={main} alt="Main"  className='image'/>
        <h2 className='welcomeh2'>welcome to wizard Tech</h2>
        <div className='allp'>
        <p className='pstyle'>
            This is a fictitious campany ans conference created by <span className='spanred'><a href="https://www.amazon.com/s?k=a+mazon+com&adgrpid=127260490003&hvadid=548017362226&hvdev=c&hvlocphy=1029477&hvnetw=g&hvqmt=b&hvrand=8525174546460543851&hvtargid=kwd-321362582074&hydadcr=27983_11498193&tag=hydglogoo-20&ref=pd_sl_6g4xlojujf_b" className='amazonred'>amazon Corporation,or its affiliates</a></span>,Solely <br />
            for the creation ans developement of educational training meterials.Any resemblance to real <br />
            products or services is <br />
            purely coincidental, Information previded about the products or services is also fictitious ans should not be construed as respresentative of actual products or services on the <br />
            market in a similar product or service category.
        </p>
        </div>
        </div>
        <Footer />
    </div>
  )
}
