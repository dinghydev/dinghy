import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIIGO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.diigo;fillColor=#2973D2;strokeColor=none',
  _width: 61.2,
  _height: 68.8,
}

export function Diigo(props: DiagramNodeProps) {
  return <Shape {...DIIGO} {...props} _style={extendStyle(DIIGO, props)} />
}
