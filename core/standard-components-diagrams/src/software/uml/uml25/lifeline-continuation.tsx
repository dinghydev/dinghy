import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIFELINE_CONTINUATION = {
  _style: 'rounded=1;dashed=0;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 200,
}

export function LifelineContinuation(props: DiagramNodeProps) {
  return <Shape {...LIFELINE_CONTINUATION} {...props} />
}
