import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_13 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;fillColor=#F2931E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;whiteSpace=wrap;',
  },
  _width: 2,
  _height: 210,
}

export function RoadmapHorizontal13(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_13}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_13, props)}
    />
  )
}
