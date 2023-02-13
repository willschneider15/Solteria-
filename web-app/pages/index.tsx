import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {

  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> eduScan | Home </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            
              <Header/>
             

              <main className="flex flex-col w-full flex-1 items-center justify-center px-20 text-center my-60">
                <div className="flex w-full flex-row items-center justify-center">
                  <h1 className="flex flex-col text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-400 pb-3">
                    Connecting Universities to Web3
                  </h1>
                </div>
                <h2 className="text-black pt-3 font-medium">
                  powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
                </h2>
              </main>

              <div id="events" className="flex flex-col gap-3">

                <h2 className="text-purple-700 font-bold text-xl">
                  Upcoming Events
                </h2>

                
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">

                  {/* we should break this up by dynamically creating each component from a markdown file that automatically leave our site when time is up */}
                  

                {/* Grizzlython */}
                <div
                   className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
                   border p-6 shadow-xl relative"
                  
                   >
                   <div className='flex flex-col'>
                    
                     <h3 className="text-xl font-bold text-zinc-900">Grizzlython - Feb 2 to Mar 14</h3>
                     <p className="mt-4 font-medium text-zinc-500">
                     Hackathon hosted by Solana with $5 Million in global prizes with multiple tracks.
                     </p>
                     <a  
                      href="https://solana.com/grizzlython"
                      target="_blank"
                      rel="noopener noreferrer">
                       <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                         Read More
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                     </a>
                                      
                   </div>
                   
                   <div className='img_card_div'>
                     <Image className="img_card rounded-lg" src="/events/grizzlython.jpeg" alt="grizzly" width={200} height={200}/>
                     
                   </div>

                   <span className="absolute top-0 right-0 mt-2 mr-2">
                   <span className="text-center text-red-500 font-medium">LIVE </span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 mr-2">
                        <span className="absolute animate-ping h-full w-full rounded-full bg-red-500 opacity-75"></span>
                       </span>

                     </span> 

                 </div>


                 {/* Near Hackathon */}
                 
                <div
                   
                   className=" grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
                   border p-6 shadow-xl relative"
                  
                   >
                   <div className='flex flex-col'>
                     <h3 className="text-xl font-bold text-zinc-900">Near Hack - Feb 8 to Feb 17</h3>
                     <p className="mt-4 font-medium text-zinc-500">
                     Hackathon hosted by Near with $5000 and 5000 Near token in prizes with multiple tracks.
                     </p>
                     <a  
                      href="https://twitter.com/NearSocial_/status/1622690510631538703"
                      target="_blank"
                      rel="noopener noreferrer">
                       <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                         Read More
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                     </a>
                   </div>
                   <div className='img_card_div'>
                     <Image className="img_card rounded-lg" src="/events/nearHack.jpeg" alt="near" width={200} height={200}/>
                   </div> 
                   
                   <span className="absolute top-0 right-0 mt-2 mr-2">
                   <span className="text-center text-red-500 font-medium">LIVE </span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 mr-2">
                        <span className="absolute animate-ping h-full w-full rounded-full bg-red-500 opacity-75"></span>
                       </span>

                     </span> 
                       
                 </div>



                  {/* NYU Blockchain */}
                  <div
                   
                   className=" grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
                   border p-6  shadow-xl"
                  
                   >
                   <div className='flex flex-col'>
                     <h3 className="text-xl font-bold text-zinc-900">NYU Blockchain - Feb 15th</h3>
                     <p className="mt-4 font-medium text-zinc-500">
                     Hosting a DeFi Workshop with Quickswap, Gamma, Gammaswap, Curve Finance, and Gains Network.
                     </p>
                     <a  
                      href="https://forms.gle/3fRpTJB9reMJThBR7"
                      target="_blank"
                      rel="noopener noreferrer">
                       <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                         Read More
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                     </a>
                   </div>
                   <div className='img_card_div'>
                     <Image className="img_card rounded-lg" src="/events/nyuBlock.webp" alt="NYU" width={200} height={200}/>
                   </div>
                     
                 </div>



                  
                    {/* Consensus card */}
                    <div
                   
                   className=" grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
                   border p-6  shadow-xl"
                  
                 >
                   <div className='flex flex-col'>
                     <h3 className="text-xl font-bold text-zinc-900">Consensus - April 26-28</h3>
                     <p className="mt-4 font-medium text-zinc-500">
                      Join the Most Important Conversation in Crypto and Web3. Hosted in Austin, Texas.
                     </p>
                     <a  
                      href="https://consensus.coindesk.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                       <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                         Read More
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                     </a>
                   </div>
                   <div className='img_card_div'>
                     <Image className="img_card rounded-lg" src="/events/consensus.png" alt="consensus" width={200} height={200}/>
                   </div>
                     
                 </div>
                  
                  {/* NFT LA */}
                  <div
                   
                    className=" grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
                    border p-6  shadow-xl"
                   
                  >
                    <div className='flex flex-col'>
                      <h3 className="text-xl font-bold text-zinc-900">NFT LA - March 20-23</h3>
                      <p className="mt-4 font-medium text-zinc-500">
                      Connect, co-create and experience the Web3 and NFT Community with thousands of the world's leaders, 
                      investors, brands, enthusiasts.
                      </p>
                      <a  
                       href="https://www.outeredge.live/"
                       target="_blank"
                       rel="noopener noreferrer">
                        <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                      </a>
                    </div>
                    <div className='img_card_div'>
                      <Image className="img_card rounded-lg" src="/events/nftLA.png" alt="NFT-LA" width={200} height={200}/>
                    </div>
                      
                  </div>

                </div>
              </div>
              
              <Footer/>
            </div>
            
          </div>
    </>
    
    
  )
}

export default Home