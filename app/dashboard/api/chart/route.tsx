export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const network = searchParams.get("network")
    const address = searchParams.get("address")
    
    const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/${network}/pools/${address}`, {
        next: { revalidate: 15 } 
    })
    const result = await res.json()

    return new Response(JSON.stringify({ result }), {
        headers: { "Content-Type": "application/json" },
    })
}