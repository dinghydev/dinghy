import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_11 = {
  _style: {
    entity: 'fillColor=#dddddd;rounded=0;strokeColor=none;',
  },
  _original_width: 0,
  _original_height: 210,
}

export function RoadmapHorizontal11(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_11}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_11, props)}
    />
  )
}
