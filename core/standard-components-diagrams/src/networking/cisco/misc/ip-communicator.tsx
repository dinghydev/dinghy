import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IP_COMMUNICATOR = {
  _style:
    'shape=mxgraph.cisco.misc.ip_communicator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 136,
  _height: 74,
}

export function IpCommunicator(props: DiagramNodeProps) {
  return <Shape {...IP_COMMUNICATOR} {...props} />
}
