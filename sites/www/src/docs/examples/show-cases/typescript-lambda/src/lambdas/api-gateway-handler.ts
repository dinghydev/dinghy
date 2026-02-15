import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda'

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const message = 'Hello World from TypeScript!'
  const response = await fetch('https://httpbin.org/get')
  const httpbin = await response.json()
  const body = JSON.stringify({
    message,
    event,
    httpbin,
  })

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body,
  }
}
