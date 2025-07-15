import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION = {
  _style:
    'html=1;align=center;verticalAlign=top;rounded=1;absoluteArcSize=1;arcSize=20;dashed=1;whiteSpace=wrap;',
  _width: 200,
  _height: 100,
}

export function InterruptibleActivityRegion(props: DiagramNodeProps) {
  return <Shape {...INTERRUPTIBLE_ACTIVITY_REGION} {...props} />
}
