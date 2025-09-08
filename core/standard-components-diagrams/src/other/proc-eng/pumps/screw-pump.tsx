import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCREW_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.screw_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 70,
  _original_height: 66,
}

export function ScrewPump(props: DiagramNodeProps) {
  return (
    <Shape {...SCREW_PUMP} {...props} _style={extendStyle(SCREW_PUMP, props)} />
  )
}
