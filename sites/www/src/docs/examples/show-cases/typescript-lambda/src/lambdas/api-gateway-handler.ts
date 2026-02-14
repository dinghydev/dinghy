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
  const data = await response.json()
  console.log(data.headers)

  return {
    'isBase64Encoded': false,
    'statusCode': 200,
    'statusDescription': '200 OK',
    'headers': { 'Content-Type': 'application/json' },
    'body': JSON.stringify({
      message: message,
      input: event,
      httpbin: data,
    }),
  }
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: message,
  //     input: event,
  //     httpbin: data,
  //   }),
  // }
}
