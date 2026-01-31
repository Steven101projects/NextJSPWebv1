




export default function MainHeader(){
    return(
    <div className="flex justify-between border-b border-gray-200 h-16 w-full bg-white">
        
              
      <a
        href="#home"
        className="w-24 h-16 bg-gray-200 flex items-center justify-center text-white"
      >
        TITLE
      </a>

      <div className="w-32 border-gray-400 m-2 border-2 rounded-2xl flex items-center justify-center ">
 <a
        href="#services"
        className="text-lg text-gray-600 font-bold"
      >
        Services
      </a>

      </div>
     
      <div className="w-28 m-2 border-gray-400 border-2 rounded-2xl flex items-center justify-center ">
 <a
        href="#about"
        className="text-lg text-gray-600 font-bold"
      >
        About
      </a>
</div>
     <div className="w-28 m-2 border-gray-400 border-2 rounded-2xl flex items-center justify-center ">
 <a
        href="#contacts"
        className="text-lg text-gray-600 font-bold"
      >
          CONTACT
        </a>
</div>
<div>
        <a
          href="/consultation"
          className="text-black"
        >
          Get Consultation
        </a>
        </div>

    </div>
    )
}