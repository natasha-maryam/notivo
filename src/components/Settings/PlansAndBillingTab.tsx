import CheckCirlce from "../../assets/svgs/check_circle.svg"
import BG from "../../assets/images/Combined Shape.png"
import Visa from "../../assets/images/visa.png"

const PlansAndBillingTab = () => {
  return (
    <div className="border border-[#EDEDED] rounded-xl p-4 overflow-y-scroll">
      <div>
        <h3
          className="text-[18px] font-medium text-gray-900 mb-6"
          style={{ letterSpacing: "-1px" }}
        >
          Plans & Billing
        </h3>

        {/* Current Plan - Green Card */}
        <div className="bg-[#8DE87F] rounded-xl p-6 mb-6 relative overflow-hidden">
          <img src={BG} alt="" className="absolute inset-0  h-full W-[700px]" />

          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg px-2 py-2 shadow-sm">
                <span className="text-[28px] font-bold text-gray-900">$89</span>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-[24px] font-semibold text-[#333333]">
                    Current plan: Pro
                  </h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-xl text-[14px] font-semibold bg-white text-black backdrop-blur-sm">
                    <img
                      src={CheckCirlce}
                      alt=""
                      className="w-[16px] h-[16px] mr-1"
                    />{" "}
                    Active
                  </span>
                </div>
                <p className="text-[#333333] text-sm">
                  You are currently on Pro plan with unlimited notes.
                </p>
              </div>
            </div>
            <button className="hidden lg:block bg-white backdrop-blur-sm text-[#333333] px-4 py-2 rounded-xl text-[15px] font-medium hover:bg-white transition-colors mt-3">
              Change plan
            </button>
          </div>
        </div>

        {/* Billing Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 border-b border-gray-200 py-3">
          <div className="flex items-center">
            <p className="text-[14px] text-[#333333] font-semibold ">
              Billing cycle:
            </p>
            <p className="font-semibold text-[#333333] text-[14px] ml-1">
              Monthly
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] text-[#333333] font-semibold ">Payment</p>
            <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-[#333333] text-white ml-3">
              $89.00
            </span>
          </div>
          <div className="flex items-center">
            <p className="text-[14px] text-[#333333] font-semibold ">
              Next renewal:
            </p>
            <p className="font-semibold text-[14px] text-[#333333] ml-1">
              12 Aug 2025
            </p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <p className="text-[14px] text-[#333333] font-semibold ">
            Payment method:
          </p>
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center space-x-3">
              <img src={Visa} alt="Visa" className="w-[89px] h-[48px]" />
              <div>
                <p className="font-medium text-gray-900">**** **** **** 8456</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </div>
            <button className="text-[14px] text-black hover:black text-left bg-[#F5F5F6] rounded-xl hover:bg-[#F5F5F6]  px-4 py-2">
              Edit Card
            </button>
          </div>
        </div>

        {/* Invoices */}
        <div className="border border-[#EDEDED] rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-4">Invoices</h4>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F5F5F6] rounded-xl">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                      Payment Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                      Invoice total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-transparent">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 pt-6">
                      12 Aug 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Subscription fee
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-[#F5F5F6] text-black">
                        Upcoming
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      $89
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      12 July 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Subscription fee
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-[#9AFB8B] text-black">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      $89
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAndBillingTab;
