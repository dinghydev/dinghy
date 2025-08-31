import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORACLE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.oracle;fillColor=#FF0000;strokeColor=none',
  _width: 90,
  _height: 23,
}

export function Oracle(props: DiagramNodeProps) {
  return <Shape {...ORACLE} {...props} _style={extendStyle(ORACLE, props)} />
}
