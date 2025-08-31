import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNOWBALL = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.snowball;fillColor=#E05243;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function Snowball(props: DiagramNodeProps) {
  return (
    <Shape {...SNOWBALL} {...props} _style={extendStyle(SNOWBALL, props)} />
  )
}
