import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_HORIZONTAL_15 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;fillColor=#23445D;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;whiteSpace=wrap;',
  },
  _original_width: 4,
  _original_height: 210,
}

export function RoadmapHorizontal15(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_15}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_15, props)}
    />
  )
}
