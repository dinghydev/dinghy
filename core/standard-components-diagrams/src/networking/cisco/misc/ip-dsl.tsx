import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_DSL = {
  _style:
    'shape=mxgraph.cisco.misc.ip_dsl;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 70,
  _height: 64,
}

export function IpDsl(props: DiagramNodeProps) {
  return <Shape {...IP_DSL} {...props} _style={extendStyle(IP_DSL, props)} />
}
