import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNNEL = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.tunnel;',
  _width: 50,
  _height: 10.75,
}

export function Tunnel(props: DiagramNodeProps) {
  return <Shape {...TUNNEL} {...props} _style={extendStyle(TUNNEL, props)} />
}
