import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUNDED_RECTANGULAR_CALLOUT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shape=mxgraph.basic.roundRectCallout;dx=30;dy=15;size=5;boundedLbl=1;',
  },
  _width: 100,
  _height: 60,
}

export function RoundedRectangularCallout(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ROUNDED_RECTANGULAR_CALLOUT)}
    />
  )
}
