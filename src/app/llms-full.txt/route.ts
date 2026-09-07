import { buildLlmsFullTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const body = buildLlmsFullTxt();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
