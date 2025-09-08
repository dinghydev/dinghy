import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_12 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;whiteSpace=wrap;',
  },
  _original_width: 1,
  _original_height: 210,
}

export function RoadmapHorizontal12(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_12}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_12, props)}
    />
  )
}
