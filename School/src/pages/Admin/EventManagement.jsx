import React, { useEffect, useState } from "react";
import axios from "axios";

const EventManagement = () => {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const [editingId, setEditingId] = useState(null);

  const API = "http://localhost:5000/api/events";

  const fetchEvents = async () => {
    try {
      const res = await axios.get(API);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", date);

      if (image) {
        formData.append("image", image);
      }

      if (editingId) {
        await axios.put(
          `${API}/${editingId}`,
          formData
        );

        alert("Event Updated Successfully");
      } else {
        await axios.post(
          API,
          formData
        );

        alert("Event Added Successfully");
      }

      setTitle("");
      setDescription("");
      setDate("");
      setImage(null);
      setEditingId(null);

      fetchEvents();

    } catch (error) {
      alert(
        error?.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  const handleEdit = (event) => {
    setEditingId(event._id);

    setTitle(event.title);
    setDescription(event.description);
    setDate(event.date);
  };

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this event?"
      );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API}/${id}`
      );

      fetchEvents();

      alert("Event Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Upcoming Events Management
      </h1>

      {/* Add Event Form */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">

        <h2 className="text-2xl font-bold mb-5">
          {editingId
            ? "Update Event"
            : "Add New Event"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border p-3 rounded-lg h-32"
            required
          />

          <input
            type="text"
            placeholder="26 January"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="file"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
            className="w-full border p-3 rounded-lg"
            accept="image/*"
            required={!editingId}
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            {editingId
              ? "Update Event"
              : "Add Event"}
          </button>
        </form>

      </div>

      {/* Events List */}

      <div className="grid md:grid-cols-2 gap-6">

        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={`http://localhost:5000/uploads/${event.image}`}
              alt={event.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {event.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {event.description}
              </p>

              <p className="mt-3 font-semibold text-green-700">
                {event.date}
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() =>
                    handleEdit(event)
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(event._id)
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default EventManagement;