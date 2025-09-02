import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11050_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11050;',
  },
  _original_width: 296.94,
  _original_height: 55.52,
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
