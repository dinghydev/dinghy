import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTIAL_CONCENTRIC_ELLIPSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;startAngle=0.25;endAngle=0.1;arcWidth=0.5;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PartialConcentricEllipse(props: NodeProps) {
  return (
    <Shape
      {...PARTIAL_CONCENTRIC_ELLIPSE}
      {...props}
      _style={extendStyle(PARTIAL_CONCENTRIC_ELLIPSE, props)}
    />
  )
}
