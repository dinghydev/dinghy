import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USE_CASE = {
  _style:
    'swimlane;fontStyle=1;align=center;horizontal=1;startSize=30;collapsible=0;html=1;whiteSpace=wrap;',
  _width: 0,
  _height: 140,
}

export function UseCase(props: DiagramNodeProps) {
  return <Shape {...USE_CASE} {...props} />
}
