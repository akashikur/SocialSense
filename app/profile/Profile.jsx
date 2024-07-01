import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Modal from "../../components/Modal";
import ToggleSwitch from "../../components/ToggleSwitch";
import getCroppedImg from "../../utils/cropImage";

const Profile = () => {
  const [onboarding, setOnboarding] = useState(true);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    setIsModalOpen(true);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    const croppedImg = await getCroppedImg(image, croppedArea);
    setCroppedImage(croppedImg);
    setIsModalOpen(false);
  };

  const [officeTour, setOfficeTour] = useState(true);
  const [managementIntro, setManagementIntro] = useState(false);
  const [workTools, setWorkTools] = useState(false);
  const [meetColleagues, setMeetColleagues] = useState(false);
  const [dutiesJournal, setDutiesJournal] = useState(false);
  const [requestsHandling, setRequestsHandling] = useState(false);
  const [activityTracking, setActivityTracking] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Russel Sims</h1>
          <button className="text-red-500">Delete</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                {croppedImage ? (
                  <img
                    src={croppedImage}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value="Russel"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value="Sims"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value="russel@mycompany.com"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                value="+1 255 29345690"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Position</label>
              <input
                type="text"
                value="iOS Developer"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <input
                type="text"
                value="Employee"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Team</label>
              <input
                type="text"
                value="HR: Kate Middleton"
                className="w-full p-2 border rounded"
                readOnly
              />
              <input
                type="text"
                value="Manager: Kirk Mitrohin"
                className="w-full p-2 border rounded mt-2"
                readOnly
              />
              <input
                type="text"
                value="Lead: Eugene Hummell"
                className="w-full p-2 border rounded mt-2"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Onboarding</label>
              <div className="flex items-center">
                <span>Onboarding required</span>
                <label className="switch ml-2">
                  <ToggleSwitch
                    isChecked={onboarding}
                    onChange={() => setOnboarding(!onboarding)}
                  />
                </label>
              </div>
              <div className="mt-4">
                <span>
                  Current Status: Onboarding {onboarding ? "On" : "Off"}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Onboarding Scripts</label>
              <div>
                <div className="flex items-center justify-between">
                  <span>Office Tour</span>
                  <ToggleSwitch
                    isChecked={officeTour}
                    onChange={() => setOfficeTour(!officeTour)}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Management Introductory</span>
                  <ToggleSwitch
                    isChecked={managementIntro}
                    onChange={() => setManagementIntro(!managementIntro)}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Work Tools</span>
                  <ToggleSwitch
                    isChecked={workTools}
                    onChange={() => setWorkTools(!workTools)}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Meet Your Colleagues</span>
                  <ToggleSwitch
                    isChecked={meetColleagues}
                    onChange={() => setMeetColleagues(!meetColleagues)}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Duties Journal</span>
                  <ToggleSwitch
                    isChecked={dutiesJournal}
                    onChange={() => setDutiesJournal(!dutiesJournal)}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Requests Handling</span>
                  <ToggleSwitch
                    isChecked={requestsHandling}
                    onChange={() => setRequestsHandling(!requestsHandling)}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Activity Tracking</span>
                  <ToggleSwitch
                    isChecked={activityTracking}
                    onChange={() => setActivityTracking(!activityTracking)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Save Changes
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded ml-4">
                Cancel
              </button>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="relative w-full h-64">
            {image && (
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleCrop}
            >
              Crop Image
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
