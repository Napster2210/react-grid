import User from '../models/user';

export default {
  create: (req, res, _next) => {
    const { firstName, lastName, email, role, status } = req.body
    console.log(firstName);
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
  }
}