import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_CALLOUT_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout2;dy=15;strokeColor=#10739E;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;',
  },
  _original_width: 60,
  _original_height: 140,
}

export function CircularCallout2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_CALLOUT_2}
      {...props}
      _style={extendStyle(CIRCULAR_CALLOUT_2, props)}
    />
  )
}
