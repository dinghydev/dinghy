import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SKYROCK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.skyrock;fillColor=#47B8FF;gradientColor=#006AAD',
  _width: 102.4,
  _height: 102.4,
}

export function Skyrock(props: DiagramNodeProps) {
  return <Shape {...SKYROCK} {...props} />
}
