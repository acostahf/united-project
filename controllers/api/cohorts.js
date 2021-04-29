const Cohort = require("../../model/cohort");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
};

async function index(req, res) {
  const cohorts = await Cohort.find({});
  res.status(200).json(cohorts);
}

async function show(req, res) {
  const cohort = await Cohort.findById(req.params.id);
  res.status(200).json(cohort);
}

async function create(req, res) {
  const cohort = await Cohort.create(req.body);
  res.status(201).json(cohort);
}

async function deleteOne(req, res) {
  const deletedCohort = await Cohort.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedCohort);
}

async function update(req, res) {
  const updatedCohort = await Cohort.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedCohort);
}
