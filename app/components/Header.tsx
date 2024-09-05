import Image from 'next/image'
import logo from '../utils/logo.png'
import nextgtel from '../utils/nextgtel.png'

const Header = () => {
  return (
    <header className='w-full bg-white flex justify-between'>
        <Image
            src={nextgtel}
            alt='nextgtel'
            className='w-[160px] h-[100px] md:w-[400px]'
            unoptimized
        />
        <Image
            src={logo}
            alt='logo'
            className='w-[100px] h-[100px]'
            unoptimized
        />
    </header>
  )
}

export default Header
