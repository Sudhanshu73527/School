import React, { useEffect, useState } from "react";
import axios from "axios";

const NoticeManagement = () => {
  const [notices, setNotices] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [editingId, setEditingId] = useState(null);

  const API_URL = "https://school-backend-o5im.onrender.com/api/notices";

  // Fetch Notices
  const fetchNotices = async () => {
    try {
      const res = await axios.get(API_URL);
      setNotices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Add / Update Notice
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const noticeData = {
        title,
        description,
        date,
      };

      if (editingId) {
        await axios.put(
          `${API_URL}/${editingId}`,
          noticeData
        );

        alert("Notice Updated Successfully");
      } else {
        await axios.post(
          API_URL,
          noticeData
        );

        alert("Notice Added Successfully");
      }

      setTitle("");
      setDescription("");
      setDate("");
      setEditingId(null);

      fetchNotices();

    } catch (error) {
      console.log(error);
    }
  };

  // Edit Notice
  const handleEdit = (notice) => {
    setEditingId(notice._id);

    setTitle(notice.title);
    setDescription(notice.description);
    setDate(notice.date);
  };

  // Delete Notice
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this notice?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API_URL}/${id}`
      );

      fetchNotices();

      alert("Notice Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Notice Management
      </h1>

      {/* Form */}

      <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">

        <h2 className="text-2xl font-bold mb-5">
          {editingId
            ? "Update Notice"
            : "Add New Notice"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Notice Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            placeholder="Notice Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border p-3 rounded-lg h-36"
            required
          />

          <input
            type="text"
            placeholder="01 June 2026"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            {editingId
              ? "Update Notice"
              : "Add Notice"}
          </button>
        </form>
      </div>

      {/* Notice List */}

      <div className="bg-white shadow-xl rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          All Notices
        </h2>

        {notices.length === 0 ? (
          <p>No Notices Found</p>
        ) : (
          notices.map((notice) => (
            <div
              key={notice._id}
              className="border rounded-xl p-5 mb-4"
            >
              <h3 className="text-xl font-bold">
                {notice.title}
              </h3>

              <p className="mt-2 text-gray-700">
                {notice.description}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {notice.date}
              </p>

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() =>
                    handleEdit(notice)
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(notice._id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default NoticeManagement;