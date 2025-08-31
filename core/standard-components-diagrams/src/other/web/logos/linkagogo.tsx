import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINKAGOGO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.linkagogo;fillColor=#F6F5FA;gradientColor=#C8C1E1',
  _width: 102.2,
  _height: 80,
}

export function Linkagogo(props: DiagramNodeProps) {
  return (
    <Shape {...LINKAGOGO} {...props} _style={extendStyle(LINKAGOGO, props)} />
  )
}
