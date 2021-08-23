const router = require("express").Router();
const Event = require("../controller/eventController");
const MulterMw = require("../middleware/image");

router.get("/getAllEvents", Event.getAllEvents);
router.post("/addEvent", MulterMw, Event.addEvent);
router.delete("/deleteEvent/:id", Event.deleteEvent);
router.put("/updateEvent/:id", Event.updateEvent);
router.get("/getEvent/:id", Event.getEvent);

module.exports = router;
