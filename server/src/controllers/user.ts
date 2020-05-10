import User from '../models/user';

export default {
  // Create and Save a new User
  create: (req, res) => {
    const { firstName, lastName, email, role, status } = req.body;
    // Create a User
    const user = new User({
      firstName,
      lastName,
      role,
      email,
      status
    });

    // Save Note in the database
    user.save()
      .then(data => {
        res.json(data);
      }).catch(err => {
        res.status(500).json({
          message: err.message || "Some error occurred while creating the User."
        });
      });
  },
  // Retrieve and return all users from the database
  findAll: (_req, res) => {
    User.find()
      .then(users => {
        res.json(users);
      }).catch(err => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving users."
        });
      });
  },
  // Find a single user with a userId
  findOne: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({
            message: "User not found with id " + req.params.userId
          });
        }
        res.json(user);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
            message: "User not found with id " + req.params.userId
          });
        }
        return res.status(500).json({
          message: "Error retrieving user with id " + req.params.userId
        });
      });
  },
  // Update a user identified by the userId in the request
  update: (req, res) => {
    // Find user and update it with the request body
    const { firstName, lastName, email, role, status } = req.body;
    User.findByIdAndUpdate(req.params.userId, {
      firstName,
      lastName,
      role,
      email,
      status
    }, { new: true })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            message: "User not found with id " + req.params.userId
          });
        }
        res.json(user);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
            message: "User not found with id " + req.params.userId
          });
        }
        return res.status(500).json({
          message: "Error updating user with id " + req.params.userId
        });
      });
  },
  // Delete a user with the specified userId in the request
  delete: (req, res) => {
    // Find user and update the status to "inactive"(Soft Delete)
    User.findByIdAndUpdate(req.params.userId, {
      status: 'inactive'
    }, { new: true })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            message: "User not found with id " + req.params.userId
          });
        }
        res.json(user);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
            message: "User not found with id " + req.params.userId
          });
        }
        return res.status(500).json({
          message: "Error updating user with id " + req.params.userId
        });
      });
  }
}