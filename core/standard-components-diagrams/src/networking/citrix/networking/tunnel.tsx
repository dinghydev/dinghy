import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUNNEL = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.tunnel;',
  _width: 50,
  _height: 10.75,
}

export function Tunnel(props: DiagramNodeProps) {
  return <Shape {...TUNNEL} {...props} />
}
