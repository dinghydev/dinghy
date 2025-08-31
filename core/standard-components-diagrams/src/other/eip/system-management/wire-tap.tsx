import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRE_TAP = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.wire_tap;fillColor=#c0f5a9',
  },
  _width: 150,
  _height: 90,
}

export function WireTap(props: DiagramNodeProps) {
  return (
    <Shape {...WIRE_TAP} {...props} _style={extendStyle(WIRE_TAP, props)} />
  )
}
