import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORACLE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.oracle;fillColor=#FA3743;gradientColor=#E10E11',
  _width: 102.4,
  _height: 102.4,
}

export function Oracle(props: DiagramNodeProps) {
  return <Shape {...ORACLE} {...props} _style={extendStyle(ORACLE, props)} />
}
