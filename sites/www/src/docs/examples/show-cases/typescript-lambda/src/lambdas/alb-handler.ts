import { ALBEvent, ALBHandler, ALBResult } from 'aws-lambda'

export const handler: ALBHandler = async (
  event: ALBEvent,
): Promise<ALBResult> => {
  const message = 'Hello World from TypeScript!'
  const response = await fetch('https://httpbin.org/get')
  const httpbin = await response.json()
  console.log(httpbin.headers)

  return {
    'isBase64Encoded': false,
    'statusCode': 200,
    'statusDescription': '200 OK',
    'headers': { 'Content-Type': 'application/json' },
    'body': JSON.stringify({
      message,
      event,
      httpbin,
    }),
  }
}
