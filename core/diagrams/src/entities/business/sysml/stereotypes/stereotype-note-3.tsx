import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_NOTE_3 = {
  _style: {
    entity:
      'rounded=0;labelBackgroundColor=none;verticalAlign=top;endArrow=none;fontStyle=1;html=1;',
  },
  _width: 3,
  _height: 150,
}

export function StereotypeNote3(props: NodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NOTE_3}
      {...props}
      _style={extendStyle(STEREOTYPE_NOTE_3, props)}
    />
  )
}
