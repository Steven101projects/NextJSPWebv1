




export default function MainHeader(){
    return(
    <div className="flex justify-between border-b border-gray-200 h-16 w-full bg-gradient-to-r from-white to-gray-300">
        <div className="w-24 h-16 bg-gray-800">
            <div className="text-white">TITLE</div>
        </div>
        <div className="w-24 h-16 bg-gray-800">
            <div className="text-white">SERVICES</div>
        </div>
        <div className="w-24 h-16 bg-gray-800">
            <div className="text-white">ABOUT</div>
        </div>
        <div className="w-24 h-16 bg-gray-800">
            <div className="text-white">NightMode Switch </div>
            <div className="text-white">CONTACT</div>
            <div className="text-white">Get Consultation</div>
        </div>
    </div>
    )
}