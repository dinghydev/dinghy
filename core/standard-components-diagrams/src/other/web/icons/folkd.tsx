import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLKD = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.folkd;fillColor=#27A2E9;gradientColor=#0A2977',
  _width: 102.4,
  _height: 102.4,
}

export function Folkd(props: DiagramNodeProps) {
  return <Shape {...FOLKD} {...props} _style={extendStyle(FOLKD, props)} />
}
