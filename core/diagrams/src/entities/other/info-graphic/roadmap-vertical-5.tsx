import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_5 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#23445D;strokeColor=none;rounded=0;',
  },
  _width: 3,
  _height: 400,
}

export function RoadmapVertical5(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_5}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_5, props)}
    />
  )
}
