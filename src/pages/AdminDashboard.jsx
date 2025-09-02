// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaDollarSign,
  FaFileAlt,
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaEnvelope,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context.jsx/LanguageContext"; // adjust path as per your structure

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Translations for headings and tab labels
const translations = {
  en: {
    dashboard: "Event Management Dashboard",
    overviewMsg: "Welcome Admin, here’s today’s overview.",
    totalEvents: "Total Events",
    registrations: "Registrations",
    revenue: "Revenue",
    feedbacks: "Feedbacks",
    tabs: ["Overview", "Events", "Analytics", "Content"],
    recentActivities: "Recent Activities",
    upcomingEvents: "Upcoming Events",
    ticketSalesAnalytics: "Ticket Sales Analytics",
    salesChannels: "Sales Channels",
    topEvents: "Top Events",
    contentManagement: "Content Management",
    eventName: "Event Name",
    date: "Date",
    location: "Location",
    registrationsLabel: "Registrations",
    price: "Price ($)",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    createEvent: "Create Event",
    logout: "Logout",
    addEvent: "Add Event",
    update: "Update",
    cancel: "Cancel",
    manage: "Manage"
  },
  ar: {
    dashboard: "لوحة إدارة الأحداث",
    overviewMsg: "مرحبًا المشرف، إليك نظرة عامة اليوم.",
    totalEvents: "إجمالي الأحداث",
    registrations: "التسجيلات",
    revenue: "الدخل",
    feedbacks: "الملاحظات",
    tabs: ["نظرة عامة", "الأحداث", "تحليلات", "المحتوى"],
    recentActivities: "الأنشطة الأخيرة",
    upcomingEvents: "الأحداث القادمة",
    ticketSalesAnalytics: "تحليلات مبيعات التذاكر",
    salesChannels: "قنوات المبيعات",
    topEvents: "أفضل الأحداث",
    contentManagement: "إدارة المحتوى",
    eventName: "اسم الحدث",
    date: "التاريخ",
    location: "الموقع",
    registrationsLabel: "عدد التسجيلات",
    price: "السعر ($)",
    actions: "الإجراءات",
    edit: "تعديل",
    delete: "حذف",
    createEvent: "إنشاء حدث",
    logout: "تسجيل الخروج",
    addEvent: "إضافة حدث",
    update: "تحديث",
    cancel: "إلغاء",
    manage: "إدارة"
  },
  he: {
    dashboard: "לוח ניהול אירועים",
    overviewMsg: "שלום אדמין, הנה הסקירה להיום.",
    totalEvents: "סך האירועים",
    registrations: "הרשמות",
    revenue: "הכנסה",
    feedbacks: "משוב",
    tabs: ["סקירה", "אירועים", "אנליטיקה", "תוכן"],
    recentActivities: "פעילויות אחרונות",
    upcomingEvents: "אירועים קרובים",
    ticketSalesAnalytics: "אנליטיקת מכירות כרטיסים",
    salesChannels: "ערוצי מכירה",
    topEvents: "אירועים מובילים",
    contentManagement: "ניהול תוכן",
    eventName: "שם האירוע",
    date: "תאריך",
    location: "מיקום",
    registrationsLabel: "הרשמות",
    price: "מחיר ($)",
    actions: "פעולות",
    edit: "ערוך",
    delete: "מחק",
    createEvent: "יצירת אירוע",
    logout: "התנתקות",
    addEvent: "הוסף אירוע",
    update: "עדכן",
    cancel: "בטל",
    manage: "ניהול"
  }
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [loggedInUser] = useState("Admin");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  // Language context
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dir = language === "ar" || language === "he" ? "rtl" : "ltr";
  }, [theme, language]);

  const [stats] = useState({
    totalEvents: 8,
    registrations: 1450,
    revenue: 56000,
    feedbacks: 210,
  });

  const [recentActivities] = useState([
    { id: 1, user: "Admin", action: "Created new event: Tech Conference 2025", time: "5 min ago", type: "event" },
    { id: 2, user: "Admin", action: "Approved 50 new registrations", time: "10 min ago", type: "registration" },
    { id: 3, user: "Admin", action: "Updated ticket pricing", time: "30 min ago", type: "revenue" },
  ]);

  // Events
  const [events, setEvents] = useState([
    { name: "Tech Summit 2025", date: "2025-09-12", location: "New York", regs: 400, price: 120 },
    { name: "Startup Expo", date: "2025-10-05", location: "San Francisco", regs: 300, price: 80 },
    { name: "Music Fest", date: "2025-11-20", location: "Los Angeles", regs: 650, price: 150 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    regs: "",
    price: "",
  });

  const handleAddOrUpdateEvent = (e) => {
    e.preventDefault();
    if (!newEvent.name || !newEvent.date || !newEvent.location || !newEvent.regs || !newEvent.price) return;

    if (editIndex !== null) {
      // Update existing
      const updatedEvents = [...events];
      updatedEvents[editIndex] = newEvent;
      setEvents(updatedEvents);
      setEditIndex(null);
    } else {
      // Add new
      setEvents([...events, newEvent]);
    }

    setNewEvent({ name: "", date: "", location: "", regs: "", price: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setNewEvent(events[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const analytics = {
    salesChannels: [
      { name: "Online", value: 70 },
      { name: "At Venue", value: 20 },
      { name: "Partners", value: 10 },
    ],
    topEvents: [
      { name: "Music Fest", value: 650 },
      { name: "Tech Summit", value: 400 },
      { name: "Startup Expo", value: 300 },
    ],
  };

  const content = [
    { title: "Event Blogs", desc: "Manage blog posts related to events", icon: <FaFileAlt /> },
    { title: "Event Pages", desc: "Edit landing pages for events", icon: <FaCalendarAlt /> },
    { title: "Messages", desc: "View participant inquiries", icon: <FaEnvelope /> },
  ];

  const StatCard = ({ icon, title, value, change, changeType, color }) => (
    <motion.div className="stat-card" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <div className="stat-icon" style={{ background: color }}>{icon}</div>
      <div className="stat-info">
        <h3>{value.toLocaleString()}</h3>
        <p>{title}</p>
      </div>
      <div className="stat-change">
        {changeType === "up" ? <FaArrowUp className="up" /> : <FaArrowDown className="down" />}
        <span className={changeType}>{change}%</span>
      </div>
    </motion.div>
  );

  // Chart Data
  const salesChannelData = {
    labels: analytics.salesChannels.map((c) => c.name),
    datasets: [
      {
        label: t.salesChannels,
        data: analytics.salesChannels.map((c) => c.value),
        backgroundColor: ["#007bff", "#28a745", "#ffc107"],
      },
    ],
  };

  const topEventsData = {
    labels: analytics.topEvents.map((t) => t.name),
    datasets: [
      {
        label: t.topEvents,
        data: analytics.topEvents.map((t) => t.value),
        backgroundColor: ["#6f42c1", "#007bff", "#ff8800"],
      },
    ],
  };

  // Tab mapping helper
  const getTabKey = (i) => {
    const tabMap = ["overview", "events", "analytics", "content"];
    return tabMap[i];
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>{t.dashboard}</h1>
        <p>{t.overviewMsg}</p>
        <div className="header-actions">
          {/* Language Dropdown */}
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded px-2 py-1 text-[var(--text-color)]"
            style={{ fontWeight: 500 }}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="he">עברית</option>
          </select>
          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button className="btn primary" onClick={() => setShowForm(true)}><FaPlus /> {t.createEvent}</button>
          <button className="btn danger" onClick={() => navigate("/login")}><FaSignOutAlt /> {t.logout}</button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <StatCard icon={<FaCalendarAlt />} title={t.totalEvents} value={stats.totalEvents} change={10} changeType="up" color="#007bff" />
        <StatCard icon={<FaUsers />} title={t.registrations} value={stats.registrations} change={8} changeType="up" color="#28a745" />
        <StatCard icon={<FaDollarSign />} title={t.revenue} value={stats.revenue} change={12} changeType="up" color="#ff8800" />
        <StatCard icon={<FaFileAlt />} title={t.feedbacks} value={stats.feedbacks} change={5} changeType="up" color="#6f42c1" />
      </div>

      {/* Tabs */}
      <div className="tabs">
        {t.tabs.map((tab, i) => (
          <button
            key={tab}
            className={`tab ${activeTab === getTabKey(i) ? "active" : ""}`}
            onClick={() => setActiveTab(getTabKey(i))}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "overview" && (
          <div className="overview">
            <h2>{t.recentActivities}</h2>
            {recentActivities.map((a) => (
              <div key={a.id} className="activity">
                <strong>{a.user}</strong> {a.action} <span>{a.time}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "events" && (
          <div className="events">
            <h2>{t.upcomingEvents}</h2>
            <table>
              <thead>
                <tr>
                  <th>{t.eventName}</th>
                  <th>{t.date}</th>
                  <th>{t.location}</th>
                  <th>{t.registrationsLabel}</th>
                  <th>{t.price}</th>
                  <th>{t.actions}</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.date}</td>
                    <td>{e.location}</td>
                    <td>{e.regs}</td>
                    <td>{e.price}</td>
                    <td>
                      <button className="btn small" onClick={() => handleEdit(i)}><FaEdit /> {t.edit}</button>
                      <button className="btn small danger" onClick={() => handleDelete(i)}><FaTrash /> {t.delete}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="analytics">
            <h2>{t.ticketSalesAnalytics}</h2>
            <div className="analytics-charts">
              <div className="chart-card">
                <h3>{t.salesChannels}</h3>
                <Pie data={salesChannelData} />
              </div>
              <div className="chart-card">
                <h3>{t.topEvents}</h3>
                <Bar data={topEventsData} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="content">
            <h2>{t.contentManagement}</h2>
            <div className="content-grid">
              {content.map((c, i) => (
                <div key={i} className="content-card">
                  <div className="icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <button className="btn primary">{t.manage}</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal for Create/Edit Event */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editIndex !== null ? t.update : t.createEvent}</h2>
            <form onSubmit={handleAddOrUpdateEvent}>
              <input
                type="text"
                placeholder={t.eventName}
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <input
                type="text"
                placeholder={t.location}
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
              <input
                type="number"
                placeholder={t.registrationsLabel}
                value={newEvent.regs}
                onChange={(e) => setNewEvent({ ...newEvent, regs: e.target.value })}
              />
              <input
                type="number"
                placeholder={t.price}
                value={newEvent.price}
                onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
              />
              <div className="modal-actions">
                <button type="submit" className="btn primary">{editIndex !== null ? t.update : t.addEvent}</button>
                <button type="button" className="btn danger" onClick={() => { setShowForm(false); setEditIndex(null); }}>{t.cancel}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .dashboard { padding: 20px; font-family: Arial, sans-serif; background: var(--bg-color); min-height: 100vh; color: var(--text-color); }
        .dashboard-header { margin-bottom: 20px; display:flex; justify-content:space-between; align-items:center; }
        .dashboard-header h1 { font-size: 28px; color: var(--heading-color); }
        .header-actions {
  display: flex;
  align-items: center;
  gap: 20px; /* INCREASED gap for separation, adjust as you like */
}

.header-actions select {
  margin-right: 8px; /* Gives extra space between dropdown and next icon/button */
}

        .btn { padding: 8px 12px; border: none; border-radius: 6px; cursor: pointer; }
        .btn.primary { background: var(--primary-color); color: #fff; }
        .btn.danger { background: var(--danger-color); color: #fff; }
        .btn.small { padding: 4px 8px; font-size: 13px; margin-right: 5px; }
        /* Stats Section */
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0; }
        .stat-card { background: var(--card-bg); padding: 20px; border-radius: 10px; box-shadow: var(--shadow); display: flex; justify-content: space-between; align-items: center; color: var(--text-color); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .stat-card:hover { box-shadow: var(--shadow-hover); }
        .stat-icon { padding: 12px; border-radius: 50%; color: #fff; font-size: 20px; }
        .stat-info h3 { margin: 0; font-size: 1.5rem; font-weight: bold; color: var(--heading-color); }
        .stat-info p { margin: 0; font-size: 0.9rem; color: var(--text-muted); }
        .stat-change { display: flex; align-items: center; font-weight: bold; }
        .stat-change .up { color: var(--accent-color); margin-right: 5px; }
        .stat-change .down { color: var(--danger-color); margin-right: 5px; }
        .tabs { margin: 20px 0; }
        .tab { padding: 10px 20px; border: none; background: var(--sidebar-bg); margin-right: 10px; cursor: pointer; border-radius: 6px; color: var(--text-color); }
        .tab.active { background: var(--primary-color); color: #fff; }
        .overview .activity { background: var(--card-bg); margin: 8px 0; padding: 10px; border-radius: 6px; box-shadow: var(--shadow-light); }
        table { width: 100%; background: var(--card-bg); border-radius: 10px; overflow: hidden; }
        table th, table td { padding: 10px; border-bottom: 1px solid var(--border-color); text-align: left; }
        .analytics-charts { display:flex; gap:20px; }
        .chart-card { flex:1; background: var(--card-bg); padding:20px; border-radius:10px; box-shadow: var(--shadow-light); }
        .content-grid { display: flex; gap: 15px; }
        .content-card { background: var(--card-bg); padding: 20px; border-radius: 10px; flex: 1; text-align: center; box-shadow: var(--shadow-light); }
        .content-card .icon { font-size: 30px; margin-bottom: 10px; }
        .theme-toggle { background: var(--card-bg); border:1px solid var(--border-color); padding:6px 10px; border-radius:50%; cursor:pointer; position:relative; top:0; }
        /* Modal */
        .modal { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; z-index:1000; }
        .modal-content { background: var(--card-bg); padding: 20px; border-radius: 10px; width: 400px; box-shadow: var(--shadow); }
        .modal-content h2 { margin-top:0; }
        .modal-content form { display:flex; flex-direction:column; gap:10px; }
        .modal-content input { padding: 8px; border:1px solid var(--border-color); border-radius: 6px; background: var(--input-bg); color: var(--text-color); }
        .modal-actions { display:flex; justify-content:flex-end; gap:10px; margin-top:10px; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
