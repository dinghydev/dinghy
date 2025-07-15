import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SNS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sns;fillColor=#D9A741;gradientColor=none;',
  _width: 76.5,
  _height: 76.5,
}

export function Sns(props: DiagramNodeProps) {
  return <Shape {...SNS} {...props} />
}
