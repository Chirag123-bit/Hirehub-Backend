const {
  addJob,
  getCompanyJobs,
  getAllJobs,
  getJobsForSpecificSector,
  getJob,
  applyForJob,
  getCompanyJobDetail,
} = require("../controllers/jobController");

const router = require("express").Router();

router.post("/addJob", addJob);
router.get("/getCompanyJobs", getCompanyJobs);
router.get("/getCompanyJobDetail", getCompanyJobDetail);
router.get("/getAllJobs", getAllJobs);
router.get("/getSectorJob", getJobsForSpecificSector);
router.get("/getJob", getJob);
router.post("/applyForJob", applyForJob);

module.exports = router;
