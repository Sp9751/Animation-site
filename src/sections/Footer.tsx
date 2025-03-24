import LogoImage from '@/assets/images/logo.svg'
import { footerLinks } from '@/constants'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='py-16'>
      <div className="container">
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
          <div>
            <Image src={LogoImage} alt='Layers logo' />
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className='text-white/50 text-sm'>{link.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer