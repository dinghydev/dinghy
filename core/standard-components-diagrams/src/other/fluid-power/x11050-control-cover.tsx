import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11050_CONTROL_COVER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11050;',
  _width: 296.94,
  _height: 55.52,
}

export function X11050ControlCover(props: DiagramNodeProps) {
  return <Shape {...X11050_CONTROL_COVER} {...props} />
}
