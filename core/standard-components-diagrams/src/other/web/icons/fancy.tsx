import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FANCY = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.fancy;fillColor=#C3ECF8;gradientColor=#348DD4',
  _width: 102.4,
  _height: 102.4,
}

export function Fancy(props: DiagramNodeProps) {
  return <Shape {...FANCY} {...props} _style={extendStyle(FANCY, props)} />
}
