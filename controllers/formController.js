 const form = require('../models/formSchema');

 const submitForm = async (req,res) => {
    try {
          const{ name,email,subject,message} = req.body;

          const newMessage = new form({
              name,
              email,
              subject,
              message,
          });

           await newMessage.save();

            res.status(201).json({message: 'Form submitted successfully'});
      } catch (error) {
           console.log(error); 
           res.status(500).json({ message: 'An error occurred while form is being submitting'});

      }
 };

 module.exports = submitForm