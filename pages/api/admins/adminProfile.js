import axios from 'axios';
import nc from 'next-connect';
import config from '../../../lib/config';
import { signToken, isAuth } from '../../../lib/adminAuth';

const handler = nc();

handler.use(isAuth);
handler.put(async (req, res) => {
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  await axios.post(
    `https://${config.projectId}.api.sanity.io/v1/data/mutate/${config.dataset}`,
    {
      mutations: [
        {
          patch: {
            id: req.admin._id,
            set: {
              name: req.body.name,
              email: req.body.email,
            },
          },
        },
      ],
    },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );

  const admin = {
    _id: req.admin._id,
    name: req.body.name,
    email: req.body.email,
    isAdmin: req.admin.isAdmin,
  };
  const token = signToken(admin);
  res.send({ ...admin, token });
});

export default handler;
