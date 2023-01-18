import React from 'react'

const About = () => {
return (
<div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:w-full h-full flex-block'>
<div className='xs:m-auto xs:pt-20 pb-15 xl:pb-10'>
<p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
</div>
<p className='text-xl max-w-screen xl:pb-20 pt:20 text-center md:text-center xs:text-base m-auto'>Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
<br/>
<p className='text-xl text-center xl:pb-80 md:text-center xs:text-base pb-10 m-auto'>
        Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    </div>
</div>
)
}

export default About