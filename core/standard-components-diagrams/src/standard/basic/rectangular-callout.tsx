import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RECTANGULAR_CALLOUT = {
  _style:
    'whiteSpace=wrap;html=1;shape=mxgraph.basic.rectCallout;dx=30;dy=15;boundedLbl=1;',
  _width: 100,
  _height: 60,
}

export function RectangularCallout(props: DiagramNodeProps) {
  return <Shape {...RECTANGULAR_CALLOUT} {...props} />
}
