import { IconBrandGithub,IconBrandTwitter,IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const Whome = () => {
  return (
    <div className='min-h-screen relative pt-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <div>
            <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749657801/profile_syrpxx.webp' alt="profile" className='h-24 md:h-32 rounded-full' />
          </div>
          <div className='font-barlow max-w-4xl'>
            <h1 className='font-bold text-3xl md:text-4xl mb-4'>Name's Prajwal BM.</h1>
            <p className='text-lg md:text-2xl'>I build systems. End to end. Front to back. Pixel to packet. I architect chaos into clean design. I take broken ideas, gut them, and rebuild them stronger, faster, leaner.</p>
          </div>
        </div>

        <div className='flex flex-col items-center '>
          <div className='flex my-8 justify-center items-center font-barlow text-neutral-500 text-sm md:text-base'>
            <p>ENOUGH ABOUT ME. WHY THIS WEBSITE?</p>
          </div>
          <div className='text-2xl md:text-4xl flex flex-col justify-center items-center text-bloodRed font-barlow font-bold space-y-4 text-center'>
            <p>You know the drill.</p>
            <p>You watch Fight Club once—you get hooked. Watch it twice—it rewires you.</p>
          </div>
        </div>

        <div className='flex justify-center mb-32'>
          <p className='max-w-6xl text-lg md:text-2xl text-center'>
            I don't just code. Sometimes, when the world slows down and the noise cuts out, I edit videos.
            For no one. Just to feel something move. Then I picked up web development. 
            Started learning animation with motion. Suddenly-boom-an idea: Why not tear down the walls between design, editing, code, and chaos?
            This site is my first shot. A digital fistfight between frontend and film. Between clean UI and raw instinct. No rules. No templates. 
            Just code, pixels, and a tribute to the kind of story that makes your bones rattle.
          </p>
        </div>

        <div className='fixed bottom-0 left-0 w-full bg-black/50  backdrop-blur-sm py-4'>
          <div className='w-full flex justify-between items-center'>
            <div className='flex items-center gap-4 text-neutral-500'>
              <div className='border w-30'></div>
              <div className='flex gap-4'>
                <a className='hover:text-white transition-colors' href="https://x.com/xshadowdev" target="_blank"><IconBrandTwitter size={20}/></a>
                <a className='hover:text-white transition-colors' href="https://github.com/PrajwalBM01" target="_blank"><IconBrandGithub size={20}/></a>
                <a className='hover:text-white transition-colors' href="https://www.linkedin.com/in/prajwal-bm-802196256/" target="_blank"><IconBrandLinkedin size={20}/></a>
                <a className='hover:text-white transition-colors' href="mailto:bmprajwaldvg@gmail.com" target="_blank"><IconMail size={20}/></a>
              </div>
            </div>
            <p className='text-sm font-barlow text-neutral-400 px-5'>
              You're not supposed to talk about Fight Club. But here we are. Thanks for stepping into the mess.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whome

{/* <main className='h-full px-4 md:px-10 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
          <img src={profile} alt="profile" className='h-24 md:h-32 rounded-full' />
          <p className='text-lg md:text-xl max-w-[670px] font-barlow text-center md:text-left'>Name's Prajwal BM. I build systems. End to end. Front to back. Pixel to packet. I architect chaos into clean design. I take broken ideas, gut them, and rebuild them stronger, faster, leaner.</p>
        </div>
        <div className='flex my-8 justify-center items-center font-barlow text-neutral-500 text-sm md:text-base'><p>ENOUGH ABOUT ME. WHY THIS WEBSITE?</p></div>
        <div className='text-2xl md:text-4xl text-bloodRed font-barlow font-bold space-y-2'>
          <p>You know the drill.</p>
          <p>You watch Fight Club once—you get hooked. Watch it twice—it rewires you.</p>
        </div>
        <div className='w-full md:w-[1080px] text-lg md:text-2xl font-barlow mt-6'>
          <p>I don't just code. Sometimes, when the world slows down and the noise cuts out, I edit videos.
          For no one. Just to feel something move.Then I picked up web development. 
          Started learning animation with motion. Suddenly-boom-an idea:Why not tear down the walls between design, editing, code, and chaos?
          This site is my first shot. A digital fistfight between frontend and film. Between clean UI and raw instinct.No rules. No templates. 
          Just code, pixels, and a tribute to the kind of story that makes your bones rattle.</p>
        </div>
      </main>
      <footer className='fixed w-full bottom-0 left-0 bg-black/50 backdrop-blur-sm py-4'>
        <div className='max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
          <div className='flex items-center gap-4 text-neutral-500'>
            <div className='border w-12'></div>
            <div className='flex gap-4'>
              <a className='hover:text-white transition-colors' href="https://x.com/xshadowdev" target="_blank"><IconBrandTwitter size={20}/></a>
              <a className='hover:text-white transition-colors' href="https://github.com/PrajwalBM01" target="_blank"><IconBrandGithub size={20}/></a>
              <a className='hover:text-white transition-colors' href="https://www.linkedin.com/in/prajwal-bm-802196256/" target="_blank"><IconBrandLinkedin size={20}/></a>
              <a className='hover:text-white transition-colors' href="mailto:bmprajwaldvg@gmail.com" target="_blank"><IconMail size={20}/></a>
            </div>
          </div>
          <p className='text-sm md:text-base text-bloodRed font-barlow text-center md:text-right max-w-[600px]'>You're not supposed to talk about Fight Club.But here we are.Thanks for stepping into the mess.</p>
        </div>
      </footer> */}