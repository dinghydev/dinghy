import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORRST = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.forrst;fillColor=#27431F',
  _width: 52.800000000000004,
  _height: 73.2,
}

export function Forrst(props: DiagramNodeProps) {
  return <Shape {...FORRST} {...props} _style={extendStyle(FORRST, props)} />
}
