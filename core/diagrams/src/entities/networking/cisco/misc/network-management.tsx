import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK_MANAGEMENT = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.network_management;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 59,
  _original_height: 54,
}

export function NetworkManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_MANAGEMENT}
      {...props}
      _style={extendStyle(NETWORK_MANAGEMENT, props)}
    />
  )
}
