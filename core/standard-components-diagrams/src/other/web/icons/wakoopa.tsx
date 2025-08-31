import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAKOOPA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.wakoopa;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Wakoopa(props: DiagramNodeProps) {
  return <Shape {...WAKOOPA} {...props} _style={extendStyle(WAKOOPA, props)} />
}
