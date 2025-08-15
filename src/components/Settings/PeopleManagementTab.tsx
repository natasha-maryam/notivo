import LeadIcon from "../../assets/svgs/lead-icon.svg"
import LeftIcon from "../../assets/svgs/chevron-left.svg";

const PeopleManagementTab = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Clark',
      position: 'Product Designer L1',
      firstMentionDate: '2 weeks ago',
      numberOfNotes: '3 notes'
    },
    {
      id: 2,
      name: 'Sarah Reynolds',
      position: 'Graphic Designer',
      firstMentionDate: '1 day ago',
      numberOfNotes: '5 notes'
    },
    {
      id: 3,
      name: 'Ryan Mitchell',
      position: 'Marketing specialist',
      firstMentionDate: '3 day ago',
      numberOfNotes: '7 notes'
    },
    {
      id: 4,
      name: 'Mia Rodriguez',
      position: 'Art Director',
      firstMentionDate: '10 day ago',
      numberOfNotes: '2 notes'
    },
    {
      id: 5,
      name: 'Katherine Turner',
      position: 'Motion Designer',
      firstMentionDate: '1 weeks ago',
      numberOfNotes: '1 notes'
    },
    {
      id: 6,
      name: 'David Larson',
      position: 'VP of Design',
      firstMentionDate: '2 weeks ago',
      numberOfNotes: '8 notes'
    },
    {
      id: 7,
      name: 'Emma Thompson',
      position: 'Product Manager',
      firstMentionDate: '6 day ago',
      numberOfNotes: '5 notes'
    },
    {
      id: 8,
      name: 'Alex Chen',
      position: 'Accountant',
      firstMentionDate: '4 day ago',
      numberOfNotes: '2 notes'
    },
    {
      id: 9,
      name: 'Olivia Bennett',
      position: 'Senior Manger',
      firstMentionDate: '3 day ago',
      numberOfNotes: '4 notes'
    }
  ];  return (
    <div className="p-4">
      {/* Header with title and Add person button */}
      <div className="flex items-center justify-between mb-6">
        <h3
          className="text-[18px] font-medium text-gray-900"
          style={{ letterSpacing: "-1px" }}
        >
          People Management
        </h3>
        <button className="inline-flex items-center px-3 py-2 text-[14px] font-medium text-white bg-[#333333] rounded-xl hover:bg-[#333333] transition-colors">
          <span className="mr-2">+</span>
          Add Person
        </button>
      </div>

      {/* Table */}
      <div className="border border-[#EDEDED] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F8] border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-[#33333399]">
                Full name
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#33333399]">
                Position
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#33333399]">
                First mention date
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-[#33333399]">
                Number of notes
              </th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr
                key={member.id}
                className={`border-b border-gray-100 hover:bg-gray-50 ${
                  index === teamMembers.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">
                    {member.name}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-blue-100 text-[#287AFF]">
                    <img
                      src={LeadIcon}
                      alt=""
                      className="w-[14px] h-[14px] mr-1"
                    />
                    {member.position}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">
                    {member.firstMentionDate}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">
                    {member.numberOfNotes}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <img src={LeftIcon} alt="Left Arrow" className="w-4 h-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View all link */}
      <div className="flex justify-end mt-4">
        <button className="text-sm text-black hover:text-black flex items-center gap-1 bg-[#F5F5F6] rounded-xl px-6 py-2">
          View all
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PeopleManagementTab;
