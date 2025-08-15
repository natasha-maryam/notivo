import Avatar from "../../assets/images/Avatar.png"

const ProfileTab = () => {
  return (
    <div className="border border-[#EDEDED] rounded-xl p-4">
      <div>
        <h3
          className="text-[18px] font-medium text-gray-900 mb-6"
          style={{ letterSpacing: "-1px" }}
        >
          Profile information
        </h3>
        <div className="space-y-8">
          {/* Profile Picture Section */}
          <div className="flex items-start space-y-4 flex-col">
            <img
              src={Avatar}
              alt="Profile Avatar"
              className="w-[113px] h-[113px] rounded-full"
            />
            <div className="flex space-x-4">
              <button className="inline-flex items-center px-3 py-2 text-[14px] font-medium text-white bg-[#333333] rounded-xl hover:bg-[#333333] transition-colors">
                <span className="mr-2">+</span>
                Upload new picture
              </button>
              <button className="text-[14px] text-black hover:black text-left bg-[#F5F5F6] rounded-xl hover:bg-[#F5F5F6]  px-4 py-2">
                Remove
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                defaultValue="Richard Joseph"
                className="w-full px-3 py-2 rounded-lg border border-[#EDEDED] focus:border-[#8DE87F] focus:outline-none bg-[#F5F5F6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="richardj89@gmail.com"
                className="w-full px-3 py-2 rounded-lg border border-[#EDEDED] focus:border-[#8DE87F] focus:outline-none bg-[#F5F5F6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2 rounded-lg border border-[#EDEDED] focus:border-[#8DE87F] focus:outline-none bg-[#F5F5F6] appearance-none">
                  <option>Engineering Manager</option>
                  <option>Software Engineer</option>
                  <option>Product Manager</option>
                  <option>Designer</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              defaultValue="Alex Johnson is an accomplished Engineering Manager with over a decade of experience in leading innovative projects. Known for his strategic vision and ability to inspire teams, Alex has successfully delivered cutting-edge solutions in the tech industry. His passion for engineering and commitment to excellence drive his team's success."
              className="w-full px-3 py-2 rounded-lg border border-[#EDEDED] focus:border-[#8DE87F] focus:outline-none bg-[#F5F5F6] resize-none"
            />
          </div>

          {/* Save Button */}
  
            <button className="inline-flex items-center px-3 py-2 text-[14px] font-medium text-white bg-[#333333] rounded-xl hover:bg-[#333333] transition-colors">
              Save Changes
            </button>
   
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
