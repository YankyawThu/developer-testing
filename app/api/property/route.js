import prisma from '../../../lib/prisma';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const offset = (page - 1) * limit;

  try {
    const properties = await prisma.property.findMany({
      skip: parseInt(offset, 10),
      take: parseInt(limit, 10)
    });

    const totalCount = await prisma.property.count();

    return new Response(JSON.stringify({properties, totalCount}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch properties', message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}