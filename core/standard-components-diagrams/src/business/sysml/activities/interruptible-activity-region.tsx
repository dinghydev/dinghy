import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION = {
  _style:
    'shape=rect;html=1;rounded=1;verticalAlign=top;dashed=1;strokeWidth=2;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 60,
}

export function InterruptibleActivityRegion(props: DiagramNodeProps) {
  return <Shape {...INTERRUPTIBLE_ACTIVITY_REGION} {...props} />
}
