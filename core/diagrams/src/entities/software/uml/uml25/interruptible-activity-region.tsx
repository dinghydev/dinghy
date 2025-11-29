import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=top;rounded=1;absoluteArcSize=1;arcSize=20;dashed=1;whiteSpace=wrap;',
  },
  _width: 200,
  _height: 100,
}

export function InterruptibleActivityRegion(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INTERRUPTIBLE_ACTIVITY_REGION)}
    />
  )
}
