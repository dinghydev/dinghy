import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_4_LINE_BUS_ELBOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.fourLineBusElbow;notch=75;',
  },
  _original_width: 120,
  _original_height: 120,
}

export function Component4LineBusElbow(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_4_LINE_BUS_ELBOW)} />
  )
}
