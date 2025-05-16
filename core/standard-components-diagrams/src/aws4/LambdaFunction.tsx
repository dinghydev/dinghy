import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAMDA_FUNCTION = {
  _color: { color: '#7AA116', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.lambda_function',
}

export function LambdaFunction(props: DiagramNodeProps) {
  return <Shape {...LAMDA_FUNCTION} {...props} />
}
