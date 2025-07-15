import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CORRELATION_IDENTIFIER = {
  _style:
    'endArrow=block;html=1;endFill=1;strokeWidth=2;strokeColor=#FF9238;rounded=0;',
  _width: 2,
  _height: 30,
}

export function CorrelationIdentifier(props: DiagramNodeProps) {
  return <Shape {...CORRELATION_IDENTIFIER} {...props} />
}
