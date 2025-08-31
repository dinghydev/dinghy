import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JAVA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.java',
  _width: 34.4,
  _height: 65,
}

export function Java(props: DiagramNodeProps) {
  return <Shape {...JAVA} {...props} _style={extendStyle(JAVA, props)} />
}
