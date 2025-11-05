import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIMITED_SPRUCE = {
  _style: {
    entity: 'fillColor=#36424A;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LimitedSpruce(props: NodeProps) {
  return (
    <Shape
      {...LIMITED_SPRUCE}
      {...props}
      _style={extendStyle(LIMITED_SPRUCE, props)}
    />
  )
}
