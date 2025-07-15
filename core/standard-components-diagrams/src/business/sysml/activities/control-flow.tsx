import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_FLOW = {
  _style: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;',
  _width: 0,
  _height: 60,
}

export function ControlFlow(props: DiagramNodeProps) {
  return <Shape {...CONTROL_FLOW} {...props} />
}
