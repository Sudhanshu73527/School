const Event = require("../models/Event");


// Add Event
exports.addEvent = async (req, res) => {
  try {

    const totalEvents = await Event.countDocuments();

    if (totalEvents >= 4) {
      return res.status(400).json({
        message:
          "Only 4 events are allowed",
      });
    }

    const event = await Event.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      image: req.file.filename,
    });

    res.status(201).json(event);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get All Events
exports.getEvents = async (req, res) => {
  try {

    const events = await Event.find();

    res.json(events);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Event
exports.updateEvent = async (req, res) => {
  try {

    const updatedData = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
    };

    if (req.file) {
      updatedData.image =
        req.file.filename;
    }

    const event =
      await Event.findByIdAndUpdate(
        req.params.id,
        updatedData,
        {
          new: true,
        }
      );

    res.json(event);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Event
exports.deleteEvent = async (req, res) => {
  try {

    await Event.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Event Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};