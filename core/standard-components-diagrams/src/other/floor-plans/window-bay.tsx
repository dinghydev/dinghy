import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOW_BAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowBay;strokeWidth=3;aspect=fixed;',
  },
  _width: 100,
  _height: 40,
}

export function WindowBay(props: DiagramNodeProps) {
  return (
    <Shape {...WINDOW_BAY} {...props} _style={extendStyle(WINDOW_BAY, props)} />
  )
}
