import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOW_BOW = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowBow;strokeWidth=3;',
  _width: 100,
  _height: 20,
}

export function WindowBow(props: DiagramNodeProps) {
  return (
    <Shape {...WINDOW_BOW} {...props} _style={extendStyle(WINDOW_BOW, props)} />
  )
}
