export async function parseBody(res: Response) {
    return (await res.json()).urls[0];
}