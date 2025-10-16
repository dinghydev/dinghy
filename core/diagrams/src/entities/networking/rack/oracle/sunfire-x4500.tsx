import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUNFIRE_X4500 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sunfire_x4500;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function SunfireX4500(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUNFIRE_X4500}
      {...props}
      _style={extendStyle(SUNFIRE_X4500, props)}
    />
  )
}
