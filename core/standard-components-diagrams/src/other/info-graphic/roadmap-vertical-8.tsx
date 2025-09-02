import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_8 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeWidth=3;strokeColor=#CCCCCC;labelBackgroundColor=none;fontSize=16',
  },
  _original_width: 0,
  _original_height: 510,
}

export function RoadmapVertical8(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_8}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_8, props)}
    />
  )
}
