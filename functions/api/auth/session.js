
export async function onRequest() {
  return new Response(
    JSON.stringify({
      authenticated: false
    }),
    {
      status: 401,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    }
  );
}
