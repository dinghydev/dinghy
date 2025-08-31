import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTIAL_CONCENTRIC_ELLIPSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#10739E;strokeColor=none;startAngle=0.25;endAngle=0.1;arcWidth=0.5;',
  },
  _width: 60,
  _height: 60,
}

export function PartialConcentricEllipse(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIAL_CONCENTRIC_ELLIPSE}
      {...props}
      _style={extendStyle(PARTIAL_CONCENTRIC_ELLIPSE, props)}
    />
  )
}
