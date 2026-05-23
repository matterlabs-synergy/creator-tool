export default async (request, context) => {
if (request.method !== "POST") {
return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
}

try {
const body = await request.json();
const videoUrl = body.url;

if (!videoUrl) {
return new Response(JSON.stringify({ error: "URL is required" }), { status: 400 });
}

// CREDIT-SAVING TEST SHORTCUT
if (videoUrl.toLowerCase() === 'test') {
return new Response(JSON.stringify({
result: "⚡ [CLOUD SERVER LOGGED IN SUCCESSFULLY]\n\n🎯 Top Hook: 'Stop scrolling if you want to double your creator views using this one simple hack...'\n\n• Highlights:\n- Consistently post high-quality shorts\n- Target a highly specific audience niche\n- Focus heavily on visual hooks"
}), { status: 200 });
}

const apiKey = Deno.env.get("OPENAI_API_KEY");
if (!apiKey) {
return new Response(JSON.stringify({ error: "OpenAI API key missing in Netlify Environment Settings." }), { status: 500 });
}

const aiResponse = await fetch('https://openai.com', {
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{
{