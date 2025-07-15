import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOW_GLIDER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowGlider;dx=0.25;',
  _width: 100,
  _height: 10,
}

export function WindowGlider(props: DiagramNodeProps) {
  return <Shape {...WINDOW_GLIDER} {...props} />
}
