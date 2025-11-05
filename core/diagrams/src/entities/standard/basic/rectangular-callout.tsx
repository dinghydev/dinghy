import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECTANGULAR_CALLOUT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shape=mxgraph.basic.rectCallout;dx=30;dy=15;boundedLbl=1;',
  },
  _width: 100,
  _height: 60,
}

export function RectangularCallout(props: NodeProps) {
  return (
    <Shape
      {...RECTANGULAR_CALLOUT}
      {...props}
      _style={extendStyle(RECTANGULAR_CALLOUT, props)}
    />
  )
}
