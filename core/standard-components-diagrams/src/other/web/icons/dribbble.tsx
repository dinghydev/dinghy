import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIBBBLE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.dribbble;gradientColor=#DFDEDE',
  _width: 102.4,
  _height: 102.4,
}

export function Dribbble(props: DiagramNodeProps) {
  return (
    <Shape {...DRIBBBLE} {...props} _style={extendStyle(DRIBBBLE, props)} />
  )
}
