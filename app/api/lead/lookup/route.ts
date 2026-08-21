// app/api/lead/lookup/route.ts

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPSTREAM =
  process.env.API_BASE?.replace(/\/+$/, "") ||
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "");

export async function OPTIONS() {
  return new Response(null, { status: 204 });
}

export async function GET(req: Request) {
  try {
    if (!UPSTREAM) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "API_BASE is not configured on the web app",
        }),
        {
          status: 500,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }

    const url = new URL(req.url);

    const upstreamUrl =
      `${UPSTREAM}/api/lead/lookup${url.search}`;

    const upstreamRes = await fetch(upstreamUrl, {
      method: "GET",
    });

    const text = await upstreamRes.text();

    return new Response(text, {
      status: upstreamRes.status,
      headers: {
        "content-type":
          upstreamRes.headers.get("content-type") ||
          "application/json",
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: err?.message || "Proxy error",
      }),
      {
        status: 502,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
