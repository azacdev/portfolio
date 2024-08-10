import { NextResponse } from "next/server";
import { auth } from "@/auth";

import { db } from "@/lib/db";

export const GET = async (req: Request) => {
  try {
    const posts = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log("[POST_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Not Authenticated!" }, { status: 401 });
  }

  try {
    const body = await req.json();

    await db.post.create({
      data: { ...body },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[POST_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
