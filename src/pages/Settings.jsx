import { useEffect, useState } from 'react'
import { api } from "../services/api";
const Settings = () => {
  const [settingsData, setSettingsData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    siteName: "",
    theme: "Light",
    notification: true,
    language: "English",
    timeZone: "Asia/SadiqAbad",
    twofactors: false
  });
  const [saved, setSaved] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox " ? checked : value,
    }));
    setSaved(false)
  };
  const handleSaved = () => {
    console.log("Setting Saved:", formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000)
  }
  const handleReset = () => {
    if (settingsData) {
      setFormData(settingsData);
    }
    setSaved(false);
  }
  const loadSettingsData = async () => {
    setLoading(true)
    try {
      const data = await api.getSettings();
      setSettingsData(data);
    }
    catch (error) {
      console.error("SettingsData Loading failed:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadSettingsData();
  }, [])

  if (loading && !settingsData) {
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    )
  }

  if (!settingsData) {
    return (
      <div className='p-6 bg-white rounded-xl border border-gray-200'>
        <div>
          <p>SettingsData data is unavailable</p>
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-6">
      {/* header */}
      <div className="text-xl font-medium text-slate-900">
        <h2>Settings</h2>
        <p className="text-sm text-gray-400 mt-1">Menage Your Application Preferance</p>
      </div>
      {/* general settings */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">General Settings</h3>
          <p className="text-sm text-gray-400 mt-1">Configure basic application settings</p>
        </div>
        <div className="p-6 space-y-6">
          {/* site name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
            <input type="text"
              name='siteName'
              value={formData.siteName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-indigo-100"
            />
          </div>
          {/* theme */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <select name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="System">System</option>
            </select>
          </div>
          {/* language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="Light">English</option>
              <option value="Dark">Urdu</option>
            </select>
          </div>
          {/* Timezone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">TimeZone</label>
            <select name="timezone"
              value={formData.timeZone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="Light">Asia</option>
              <option value="Dark">Asia/Dubai</option>
              <option value="System">America/West</option>
              <option value="System">America/East</option>
            </select>
          </div>
        </div>
      </div>
      {/* notification */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">Notifications</h3>
          <p className="text-sm text-gray-400 mt-1 ">Control Application Notification</p>
        </div>
        <div className="p-6">
          <label className="flex items-center justify-between gap-4 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-gray-700">Email Notifications</p>
              <p className="text-xs text-gray-400 mt-1">Receive important updated through emails</p>
            </div>
            <input type="checkbox"
              name='notification'
              checked={formData.notification}
              onChange={handleChange}
              className="w-5 h-5 accent-indigo-600"
            />
          </label>
        </div>
      </div>
      {/* security */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">Security</h3>
          <p className="text-sm text-gray-400 mt-1 ">Menage Account Preference</p>
        </div>
        <div className="p-6">
          <label className="flex items-center justify-between gap-4 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-gray-700">Two Factor Authentication</p>
              <p className="text-xs text-gray-400 mt-1">Add an additional layer of security</p>
            </div>
            <input type="checkbox"
              name='twoFactor'
              checked={formData.twoFactor}
              onChange={handleChange}
              className="w-5 h-5 accent-indigo-600"
            />
          </label>
        </div>
      </div>
      {/* action button */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            {saved && (
              <p className="text-sm text-emerald-600">
                Setting Saved Successfully
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
            <button onClick={handleReset} className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">
              Reset
            </button>
            <button onClick={handleSaved} className="px-5 py-2.5 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm shadow-sm hover:shadow-md transition">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Settings