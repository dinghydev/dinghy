import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_17 = {
  _style: {
    entity:
      'fillColor=#F2931E;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  },
  _width: 10,
  _height: 510,
}

export function RoadmapVertical17(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_VERTICAL_17)} />
}
