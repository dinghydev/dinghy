import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_2_LINE_BUS_ELBOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.twoLineBusElbow;notch=25;',
  },
  _original_width: 120,
  _original_height: 120,
}

export function Component2LineBusElbow(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_2_LINE_BUS_ELBOW)} />
  )
}
