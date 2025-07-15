import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOST = {
  _style:
    'shape=mxgraph.cisco.servers.host;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 104,
  _height: 51,
}

export function Host(props: DiagramNodeProps) {
  return <Shape {...HOST} {...props} />
}
