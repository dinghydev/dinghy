import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORRST = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.forrst;fillColor=#3E6B32;gradientColor=#111C0D',
  _width: 102.4,
  _height: 102.4,
}

export function Forrst(props: DiagramNodeProps) {
  return <Shape {...FORRST} {...props} _style={extendStyle(FORRST, props)} />
}
