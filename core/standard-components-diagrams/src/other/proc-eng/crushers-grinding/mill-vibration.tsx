import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MILL_VIBRATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill_(vibration)2;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function MillVibration(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILL_VIBRATION}
      {...props}
      _style={extendStyle(MILL_VIBRATION, props)}
    />
  )
}
