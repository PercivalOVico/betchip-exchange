import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../lib/adminAuth';
import client from '../../../lib/client';


const handler = nc();

handler.post(async (req, res) => {
  const admin = await client.fetch(`*[_type == "admin" && email == $email][0]`, {
    email: req.body.email,
  });
  if (admin && bcrypt.compareSync(req.body.password, admin.password)) {
    const token = signToken({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
    });
    res.send({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      token,
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

export default handler;
