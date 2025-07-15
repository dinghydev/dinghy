import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_MESSAGE = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#83BEFF;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 2,
  _height: 30,
}

export function EventMessage(props: DiagramNodeProps) {
  return <Shape {...EVENT_MESSAGE} {...props} />
}
