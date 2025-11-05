import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOW_GLIDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowGlider;dx=0.25;',
  },
  _width: 100,
  _height: 10,
}

export function WindowGlider(props: NodeProps) {
  return (
    <Shape
      {...WINDOW_GLIDER}
      {...props}
      _style={extendStyle(WINDOW_GLIDER, props)}
    />
  )
}
