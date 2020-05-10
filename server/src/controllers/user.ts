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
    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
      title: req.body.title || "Untitled Note",
      content: req.body.content
    }, { new: true })
      .then(note => {
        if (!note) {
          return res.status(404).json({
            message: "Note not found with id " + req.params.userId
          });
        }
        res.json(note);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
            message: "Note not found with id " + req.params.userId
          });
        }
        return res.status(500).json({
          message: "Error updating note with id " + req.params.userId
        });
      });
  },
}