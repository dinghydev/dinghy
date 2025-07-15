import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDWATCH = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudwatch;fillColor=#759C3E;gradientColor=none;',
  _width: 82.5,
  _height: 93,
}

export function Cloudwatch(props: DiagramNodeProps) {
  return <Shape {...CLOUDWATCH} {...props} />
}
