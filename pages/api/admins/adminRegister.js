import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import config from '../../../lib/config';
import client from '../../../lib/client';
import { signToken } from '../../../lib/adminAuth';


const handler = nc();

handler.post(async (req, res) => {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  const createMutations = [
    {
      create: {
        _type: 'admin',
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        isAdmin: false,
      },
    },
  ];
  const existAdmin = await client.fetch(
    `*[_type == "admin" && email == $email][0]`,
    {
      email: req.body.email,
    }
  );
  if (existAdmin) {
    return res.status(401).send({ message: 'Email aleardy exists' });
  }
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );
  const adminId = data.results[0].id;
  const admin = {
    _id: adminId,
    name: req.body.name,
    email: req.body.email,
    isAdmin: false,
  };
  const token = signToken(admin);
  res.send({ ...admin, token });
});

export default handler;
