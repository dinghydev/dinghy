import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOW_GARDEN = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowGarden;dx=0.25;',
  _width: 100,
  _height: 20,
}

export function WindowGarden(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOW_GARDEN}
      {...props}
      _style={extendStyle(WINDOW_GARDEN, props)}
    />
  )
}
