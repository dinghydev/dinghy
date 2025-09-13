import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWER_STRIP = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.power_strip;',
  },
  _width: 162,
  _height: 15,
}

export function PowerStrip(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWER_STRIP}
      {...props}
      _style={extendStyle(POWER_STRIP, props)}
    />
  )
}
