import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUNFIRE_X2100 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sunfire_x2100;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 162,
  _original_height: 15,
}

export function SunfireX2100(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUNFIRE_X2100}
      {...props}
      _style={extendStyle(SUNFIRE_X2100, props)}
    />
  )
}
