export const screens = {
    0:{
        title: <span>How does it <span className='text-header-white'>Work</span> <span className='text-header-blue'>?</span></span>,
        description: <h1 className=' text-description-white'>We make it possible in a quick and easy few steps process, takes max 5 mins</h1>,
        image:'/ss1.png',
        slider: '5%',
        img_layout:'top-1/2 md:-translate-y-1/2',
    },
    1:{
        title:<span>Step <span className='text-header-white'>1</span></span>,
        description:<div className='flex flex-col gap-y-2'>
                        <h1 className=' text-description-heading'>Tenant selects the property</h1>
                        <h1 className=' text-description-white'>Tenant selects flexible rent tenure & corresponding amount</h1>
                    </div>,
        image:'/ss1.png',
        slider: '20%',
        img_layout:'top-1/3 md:scale-[1.5] max-md:scale-[1.3] max-md:translate-y-1/4',
        arrow:'top-1/4 right-[80%]'
    },
    2:{
        title:<span>Step <span className='text-header-white'>1</span></span>,
        description:<div className='flex flex-col gap-y-2'>
                        <h1 className=' text-description-white'>Tenant selects the property</h1>
                        <h1 className=' text-description-heading'>Tenant selects flexible rent tenure & corresponding amount</h1>
                    </div>,
        image: '/ss2.png',
        slider: '30%',
        img_layout:'top-[20%] md:scale-[1.4]',
        arrow:'top-[40%] right-[40%]',
        arrow_additional :{transform:'rotateX(180deg)'}
    },
    3:{
        title:<span>Step <span className='text-header-white'>2</span></span>,
        description:<div className='flex flex-col gap-y-2'>
                        <h1 className=' text-description-heading'>Tenant selects the property</h1>
                        <ul className=' text-description-white list-disc pl-3'>
                            <li>Zero security deposit move-in</li>
                            <li>Reduced rent offer</li>
                            <li>3 months salary cover</li>
                        </ul>
                    </div>,
        image:'/ss3.png',
        slider: '60%',
        img_layout:'md:-translate-y-[10%] md:scale-[1.4]',
        arrow:'top-[55%] right-[75%]',
        arrow_additional :{transform:'rotateX(180deg) rotateZ(-40deg)'}
    },
    4:{
        title:<span>Step <span className='text-header-white'>3</span></span>,
        description: <h1 className=' text-description-heading'>Smooth Onboarding for the Tenant begins</h1>,
        image:'/ss4.png',
        slider: '80%',
        img_layout:'top-[5%]',
        arrow:'top-[52%] right-[70%]',
        arrow_additional :{transform:'rotateX(180deg) rotateZ(-40deg)'}
    },
    5:{
        title:<span>Step <span className='text-header-white'>4</span></span>,
        description:<div className='flex flex-col gap-y-2'>
                        <h1 className=' text-description-heading'>Tenant gets approved to move-in</h1>
                        <ul className=' text-description-white list-disc pl-3'>
                            <li>Gets Zero-security deposit approval</li>
                            <li>Zero cost EMI = Monthly Rent</li>
                        </ul>
                    </div>,
        image:'/ss5.png',
        slider: '100%',
        img_layout:'top-[9%]',
        arrow:'top-[58%] right-[70%]',
        arrow_additional :{transform:'rotateX(180deg) rotateZ(-40deg)'}
    },
}