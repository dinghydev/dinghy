import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_8_LINE_BUS_ELBOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.eightLineBusElbow;notch=180;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function Component8LineBusElbow(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_8_LINE_BUS_ELBOW)} />
  )
}
