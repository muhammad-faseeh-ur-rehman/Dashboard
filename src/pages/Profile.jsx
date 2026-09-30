// import react from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* left col */}
      <div className="col-span-1 bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center gap-4">
        {/* logo */}
        <div className=" w-20 h-20 bg-primary text-white font-medium flex items-center justify-center text-3xl border-2 border-gray-400 rounded-full">
          AU
        </div>
        <div className="text-center border-b border-gray-200 w-full pb-4 mb-4">
          <p className="text-xl font-light text-text-primary">Admin User</p>
          <p className="text-sm font-light text-text-primary">Super Admin</p>
          <p className="text-xs font-light text-text-primary">Joined 2026-01-01</p>
        </div>

        {/* email or phone num */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>admin@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+92 98765 43210</span>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="col-span-2 space-y-6">
        {/* about */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <p className="text-sm text-text-primary font-light mb-4 uppercase">About</p>
          <p className="text-sm text-text-primary font-light mb-4 uppercase">Full stack Developer with 8+ years of experience. Passionate about building beautiful,Scalable Products</p>
        </div>
        {/* Details */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 items-left">
          <p className="text-sm text-text-primary font-light flex items-center uppercase mb-4">Details</p>
          <div className="text-sm text-text-primary font-light flex items-center gap-8 mb-2">
            <span>Location</span>
            <span>SDK / Pakistan</span>
          </div>
          <div className="text-sm text-text-primary font-light flex items-center gap-8 mb-2">
            <span>WebSite</span>
            <span>https://adminhub.com</span>
          </div>
          <div className="text-sm text-text-primary font-light flex items-center gap-8 mb-2">
            <span>Email</span>
            <span>admin@gmail.com</span>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Profile