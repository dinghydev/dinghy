import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_HORIZONTAL_11 = {
  _style: 'fillColor=#dddddd;rounded=0;strokeColor=none;',
  _width: 0,
  _height: 210,
}

export function RoadmapHorizontal11(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_HORIZONTAL_11} {...props} />
}
