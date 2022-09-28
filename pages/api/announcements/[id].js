import nc from 'next-connect';
import client from '../../../lib/client';

const handler = nc();

handler.get(async (req, res) => {
  const announcement = await client.fetch(`*[_type == "Announcement" && _id == $id][0]`, {id: req.query.id,});
  res.send(announcement);
});
export default handler;
