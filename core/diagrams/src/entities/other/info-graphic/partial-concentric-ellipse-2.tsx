import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTIAL_CONCENTRIC_ELLIPSE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0;endAngle=0.75;arcWidth=0.4;fontSize=20;fontColor=#10739E;align=center;fontStyle=1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PartialConcentricEllipse2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PARTIAL_CONCENTRIC_ELLIPSE_2)}
    />
  )
}
