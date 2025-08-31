import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAKOOPA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wakoopa;fillColor=#FF6D00;strokeColor=none',
  _width: 82.60000000000001,
  _height: 44.800000000000004,
}

export function Wakoopa(props: DiagramNodeProps) {
  return <Shape {...WAKOOPA} {...props} _style={extendStyle(WAKOOPA, props)} />
}
