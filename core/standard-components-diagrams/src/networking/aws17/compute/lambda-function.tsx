import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAMBDA_FUNCTION = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.lambda_function;fillColor=#F58534;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function LambdaFunction(props: DiagramNodeProps) {
  return <Shape {...LAMBDA_FUNCTION} {...props} />
}
