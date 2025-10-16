import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11050_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11050;',
  },
  _width: 296.94,
  _height: 55.52,
}

export function X11050ControlCover(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11050_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11050_CONTROL_COVER, props)}
    />
  )
}
