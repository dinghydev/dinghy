import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MILL_VIBRATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill_(vibration)2;',
  },
  _width: 100,
  _height: 60,
}

export function MillVibration(props: NodeProps) {
  return (
    <Shape
      {...MILL_VIBRATION}
      {...props}
      _style={extendStyle(MILL_VIBRATION, props)}
    />
  )
}
