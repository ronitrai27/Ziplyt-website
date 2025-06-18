import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-deep py-4 mt-14'>
      <div className='w-full px-8'>
        {/* LOGO + TAGLINE */}
        <h2 className='w-full text-[42px] text-light/80 font-semibold font-main text-center'>
          Ziplyt
        </h2>
        <p className='text-center text-[24px] font-poppins text-light/80 mt-3'>
          Zip it , Fix it , Love it
        </p>
        <hr className='w-[90%] mx-auto border-b-[.1px] border-light/40 my-2' />

        <div className='w-full px-4'>
          <div className='max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-3 w-full mt-6 gap-10'>
            {/* NEWSLETTER + SOCIAL LINKS */}
            <div className='flex flex-col items-center text-center px-4'>
              <p className='font-inter font-light text-[15px] text-white tracking-tight leading-snug text-balance mb-2'>
                Stay Updated with every offer and news. By clicking{' '}
                <span className='font-semibold tracking-wide'>Subscribe</span>{' '}
                you agree to our{' '}
                <span className='underline underline-offset-2 font-extralight'>
                  terms and conditions.
                </span>
              </p>
              {/* EMAIL AND SUBSCRIBE */}
              <div className='mt-4 mb-2 w-full flex justify-center'>
                <form className='w-full max-w-sm'>
                  <label
                    htmlFor='email'
                    className='sr-only'
                  >
                    Email
                  </label>
                  <div className='flex items-center bg-gray-300 rounded-full px-2 py-1'>
                    <input
                      id='email'
                      type='email'
                      placeholder='Enter your email'
                      className='flex-grow bg-transparent text-black text-sm px-3 py-2 outline-none'
                      required
                    />
                    <button
                      type='submit'
                      className='bg-primary-blue text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition'
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              {/* SOCILA LINKS */}
              <div className='flex gap-4 justify-center mt-5'>
                <a
                  href='https://www.instagram.com/ziplyt.official'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/instagram.png'
                    alt='Instagram'
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/company/ziplyt'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/linkedin.png'
                    alt='LinkedIn'
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/facebook.png'
                    alt='Facebook'
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            </div>

            {/* COMPANY LINKS */}
            <div className='px-4 flex flex-col items-center text-center'>
              <h2 className='text-lg font-semibold mb-3 font-inter text-white'>
                Company
              </h2>
              <ul className='space-y-3 text-[18px] text-gray-300'>
                <li>
                  <Link href='/#'>
                    <span className='hover:text-white transition cursor-pointer'>
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='/reachus'>
                    <span className='hover:text-white transition cursor-pointer'>
                      Reach Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div className='px-4 flex flex-col items-center text-center'>
              <h2 className='text-lg font-semibold mb-3 font-inter text-white text-left'>
                Support
              </h2>
              <ul className='text-lg text-gray-300 flex flex-col gap-3'>
                <li className='flex flex-col sm:flex-row gap-1'>
                  <span className='block text-gray-400'>Email:</span>
                  <a
                    href='mailto:hello@ziplyt.com'
                    className='text-white'
                  >
                    hello@ziplyt.com
                  </a>
                </li>
                <li className='flex flex-col sm:flex-row gap-1'>
                  <span className='block text-gray-400'>Phone:</span>
                  <span className='text-white'>+91 62806 20947</span>
                </li>
                <li className='flex flex-col sm:flex-row gap-1'>
                  <span className='block text-gray-400'>Location:</span>
                  <span className='text-white'>Ludhiana, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className='w-[90%] mx-auto border-b-[.1px] border-light/40 my-5' />
      {/* Bottom Bar */}
      <div className='mt-5 text-center text-[16px] text-gray-200'>
        © {new Date().getFullYear()} Ziplyt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
