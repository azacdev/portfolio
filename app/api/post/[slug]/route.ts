import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@/auth";

// GET SINGLE POST
export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  console.log("SERVER", slug);

  try {
    const post = await db.post.findUnique({
      where: { slug },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log("[POST_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function PATCH(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { message: "Not Authenticated!" },
        { status: 401 }
      );
    }

    const body = await req.json();

    await db.post.update({
      where: {
        id: slug,
      },
      data: { ...body },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[POST_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const session = await auth();

  const { slug } = params;

  if (!session) {
    return NextResponse.json({ error: "Not Authenticated!" }, { status: 401 });
  }

  try {
    const post = await db.post.delete({
      where: {
        id: slug,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
