import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_14 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;fillColor=#AE4132;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;whiteSpace=wrap;',
  },
  _width: 3,
  _height: 210,
}

export function RoadmapHorizontal14(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_14}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_14, props)}
    />
  )
}
