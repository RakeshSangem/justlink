import mongoose from 'mongoose';

const connect = async () => {
  // we'll do this check if we want to avoid multiple connections
  // if (mongoose.connections[0].readyState) {
  //   console.log('Already connected.');
  //   return;
  // }
  try {
    await mongoose.connect('mongodb://localhost:27017');
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log(error);
  }
};

export default connect;
