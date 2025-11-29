import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION = {
  _style: {
    entity:
      'shape=rect;html=1;rounded=1;verticalAlign=top;dashed=1;strokeWidth=2;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function InterruptibleActivityRegion(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INTERRUPTIBLE_ACTIVITY_REGION)}
    />
  )
}
