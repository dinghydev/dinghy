import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOW_GARDEN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowGarden;dx=0.25;',
  },
  _original_width: 100,
  _original_height: 20,
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
