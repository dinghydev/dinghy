import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCENIC_VIEWPOINT = {
  _style:
    'shape=mxgraph.signs.sports.scenic_viewpoint;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 80,
  _height: 99,
}

export function ScenicViewpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCENIC_VIEWPOINT}
      {...props}
      _style={extendStyle(SCENIC_VIEWPOINT, props)}
    />
  )
}
