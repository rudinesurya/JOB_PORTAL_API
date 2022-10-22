const catchAsync = require('../utils/catchAsync');
const Application = require('../model/applicationModel');
const factory = require('./handleFactory');
const { ObjectId } = require('mongodb');

exports.createApplication = catchAsync(async (req, res, next) => {
  const application = await Application.create({
    user: req.user.id,
    job: ObjectId(req.params.jobID),
    description: req.body.description
  });

  res.status(201).json({
    status: 'success',
    data: {
      application
    }
  });
});

exports.getAllApplications = factory.getAll(Application);
exports.getApplication = factory.getOne(Application);
exports.deleteApplication = factory.deleteOne(Application);
