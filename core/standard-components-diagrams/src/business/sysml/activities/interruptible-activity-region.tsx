import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION = {
  _style: {
    entity:
      'shape=rect;html=1;rounded=1;verticalAlign=top;dashed=1;strokeWidth=2;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function InterruptibleActivityRegion(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERRUPTIBLE_ACTIVITY_REGION}
      {...props}
      _style={extendStyle(INTERRUPTIBLE_ACTIVITY_REGION, props)}
    />
  )
}
