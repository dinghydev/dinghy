import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HUB = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.hub;',
  _width: 160,
  _height: 30,
}

export function Hub(props: DiagramNodeProps) {
  return <Shape {...HUB} {...props} _style={extendStyle(HUB, props)} />
}
