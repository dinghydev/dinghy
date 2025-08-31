import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCOOPIT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.scoopit;fillColor=#6CAB36;strokeColor=none',
  _width: 58,
  _height: 70,
}

export function Scoopit(props: DiagramNodeProps) {
  return <Shape {...SCOOPIT} {...props} _style={extendStyle(SCOOPIT, props)} />
}
