import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUNDED_RECTANGULAR_CALLOUT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shape=mxgraph.basic.roundRectCallout;dx=30;dy=15;size=5;boundedLbl=1;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function RoundedRectangularCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUNDED_RECTANGULAR_CALLOUT}
      {...props}
      _style={extendStyle(ROUNDED_RECTANGULAR_CALLOUT, props)}
    />
  )
}
