import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUNDED_RECTANGULAR_CALLOUT = {
  _style:
    'whiteSpace=wrap;html=1;shape=mxgraph.basic.roundRectCallout;dx=30;dy=15;size=5;boundedLbl=1;',
  _width: 100,
  _height: 60,
}

export function RoundedRectangularCallout(props: DiagramNodeProps) {
  return <Shape {...ROUNDED_RECTANGULAR_CALLOUT} {...props} />
}
