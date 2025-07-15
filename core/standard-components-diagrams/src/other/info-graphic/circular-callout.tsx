import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_CALLOUT = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout;dy=15;fillColor=#10739E;strokeColor=none;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;whiteSpace=wrap;',
  _width: 100,
  _height: 100,
}

export function CircularCallout(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_CALLOUT} {...props} />
}
