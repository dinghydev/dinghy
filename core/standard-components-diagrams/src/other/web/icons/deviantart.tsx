import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVIANTART = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.deviantart;fillColor=#00C659;gradientColor=#00813B',
  _width: 102.4,
  _height: 102.4,
}

export function Deviantart(props: DiagramNodeProps) {
  return <Shape {...DEVIANTART} {...props} />
}
