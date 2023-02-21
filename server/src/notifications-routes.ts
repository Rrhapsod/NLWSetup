import { FastifyInstance } from "fastify";
import WebPush from "web-push";

const publicKey = "BDDByzy8wcM1EoQGq3fmDYNRMXMESYZ4MUeAA9a-B2FI2nu3JBb3KlWPzYvaXSRXI910zuk0FpujYdx-2oogAa0"
const privateKey = "Kq8JNgtx_sUq0vSrN_4dDtaEh5aBXkdo55aCEDvuOMo"

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey)

export async function notificationsRoutes(app:FastifyInstance) {
  
}