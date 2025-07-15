import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PINPOINT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.pinpoint;fillColor=#AD688B;gradientColor=none;',
  _width: 76.5,
  _height: 87,
}

export function Pinpoint(props: DiagramNodeProps) {
  return <Shape {...PINPOINT} {...props} />
}
