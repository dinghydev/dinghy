import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAMDA_FUNCTION = {
  _color: { color: '#7AA116', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.lambda_function',
}

export function LambdaFunction(props: DiagramNodeProps) {
  return <Shape {...LAMDA_FUNCTION} {...props} />
}
