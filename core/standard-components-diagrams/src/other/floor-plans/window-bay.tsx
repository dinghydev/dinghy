import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOW_BAY = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowBay;strokeWidth=3;aspect=fixed;',
  _width: 100,
  _height: 40,
}

export function WindowBay(props: DiagramNodeProps) {
  return <Shape {...WINDOW_BAY} {...props} />
}
