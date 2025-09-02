import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCENIC_VIEWPOINT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.scenic_viewpoint;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 80,
  _original_height: 99,
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
