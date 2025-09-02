import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUNFIRE_X4100 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sunfire_x4100;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function SunfireX4100(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUNFIRE_X4100}
      {...props}
      _style={extendStyle(SUNFIRE_X4100, props)}
    />
  )
}
