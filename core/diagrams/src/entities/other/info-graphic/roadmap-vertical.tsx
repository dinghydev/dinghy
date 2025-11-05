import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#10739E;strokeColor=none;rounded=0;',
  },
  _width: 0,
  _height: 70,
}

export function RoadmapVertical(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL, props)}
    />
  )
}
