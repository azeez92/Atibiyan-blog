import { Button, Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";


export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 flex flex-col" >
     <main className="flex flex-col gap-7 w-full md:flex-row">
      <aside className="p-4">
      <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-2 text-white rounded-lg'>Atibyan</span> 
      Blog
          <p className="text-xl mt-4 md:text-sm md:text-left ">Atibyan Blog is your go-to source for insightful articles, inspiring stories, and expert advice on a wide range of topics. Join us on a journey of learning and discovery.</p>
    
  
      </aside>
      <aside className="grid grid-cols-2 gap-3 sm:mt-4 md:grid-cols-3 md:gap-6">
        <div>
          <Footer.Title title="Category"/>
          <Footer.LinkGroup col>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>News</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Health</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Travel</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Education</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Technology</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Politics</Footer.Link>
          </Footer.LinkGroup>
        
        
        </div>
        <div>
          <Footer.Title title="Quick link"/>

          <Footer.LinkGroup col>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>About</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Privacy policy</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Contact us</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Report a User</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Terms and condition</Footer.Link>
            <Footer.Link href="#" target='_blank' rel='noopener noreferrer'>Atibyan blog community</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div >
          <Footer.Title title="Share a story !"/>

          <p className="text-xl mt-4 md:text-sm md:text-left pb-4 w-full">Have an inspiring story or insightful article to share? We'd love to feature it on Atibyan Blog!.</p>
          <Link to='/signin'>
      <Button gradientDuoTone='purpleToPink' outline>Submit your story</Button>
    </Link>
        </div>

        
      </aside>
      </main>
      <Footer.Divider/>
      <div className="w-full sm:flex sm:items-center justify-center md:justify-between">
        <Footer.Copyright by='Atibyan Blog' year={new Date().getFullYear()} />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook}/>
          <Footer.Icon href="#" icon={BsTwitter}/>
          <Footer.Icon href="#" icon={BsPinterest}/>
          <Footer.Icon href="#" icon={BsInstagram}/>


        </div>
      </div>
      
    </Footer>
    
  )
}