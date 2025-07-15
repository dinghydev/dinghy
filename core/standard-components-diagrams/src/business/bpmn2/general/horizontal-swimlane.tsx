import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_SWIMLANE = {
  _style: 'swimlane;startSize=20;horizontal=0;html=1;whiteSpace=wrap;',
  _width: 320,
  _height: 120,
}

export function HorizontalSwimlane(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_SWIMLANE} {...props} />
}
