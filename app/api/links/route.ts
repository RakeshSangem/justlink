// pages/api/link.js
import connect from '@/db';
import Link from '@/models/link.model';

export async function POST(req: Request, res: Response) {
  if (req.method === 'POST') {
    try {
      await connect();
      const body = await req.json();

      const newLink = new Link({
        title: body.title,
        url: body.url,
      });

      const savedLink = await newLink.save();

      return Response.json(savedLink);

      // // Validate and create a new link
      // const newLink = new Link({
      //   title,
      //   url,
      //   // other fields
      // });

      // const savedLink = await newLink.save();

      // res.status(201).json(savedLink);
    } catch (error) {
      console.error('Error creating link:', error);
      // res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export async function GET(req: Request, res: Response) {
  if (req.method === 'GET') {
    try {
      await connect();
      const [...links] = await Link.find({});
      console.log('links from route', links);
      return Response.json(links);
    } catch (error) {
      console.error('Error getting links:', error);
      // res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export async function PUT(req: Request, res: Response) {
  if (req.method === 'PUT') {
    try {
      await connect();
      const body = await req.json();
      console.log('body from route', body);
      const updatedLink = await Link.findByIdAndUpdate(body._id, body, {
        new: true,
      });
      return Response.json(updatedLink);
    } catch (error) {
      console.error('Error updating link:', error);
      // res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // res.status(405).json({ error: 'Method Not Allowed' });
  }
}
