import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECTANGULAR_CALLOUT = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;shape=mxgraph.basic.rectCallout;dx=30;dy=15;boundedLbl=1;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function RectangularCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECTANGULAR_CALLOUT}
      {...props}
      _style={extendStyle(RECTANGULAR_CALLOUT, props)}
    />
  )
}
