import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_COMMUNICATOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ip_communicator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 136,
  _original_height: 74,
}

export function IpCommunicator(props: DiagramNodeProps) {
  return (
    <Shape
      {...IP_COMMUNICATOR}
      {...props}
      _style={extendStyle(IP_COMMUNICATOR, props)}
    />
  )
}
