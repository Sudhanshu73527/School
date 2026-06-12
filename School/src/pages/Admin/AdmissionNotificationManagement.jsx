import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";

const AdmissionNotificationManagement = () => {
  const [admissionOpen, setAdmissionOpen] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [lastDate, setLastDate] =
    useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://school-backend-o5im.onrender.com/api/admission-notification"
      );

      if (res.data) {
        setAdmissionOpen(
          res.data.admissionOpen
        );

        setStartDate(
          res.data.startDate
        );

        setLastDate(
          res.data.lastDate
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        "https://school-backend-o5im.onrender.com/api/admission-notification",
        {
          admissionOpen,
          startDate,
          lastDate,
        }
      );

      alert("Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Admission Notification
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          placeholder="Admission Open 2026-27"
          value={admissionOpen}
          onChange={(e) =>
            setAdmissionOpen(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="01 April 2026"
          value={startDate}
          onChange={(e) =>
            setStartDate(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="30 June 2026"
          value={lastDate}
          onChange={(e) =>
            setLastDate(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>
      </form>

    </div>
  );
};

export default AdmissionNotificationManagement;