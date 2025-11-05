import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_NOTE_4 = {
  _style: {
    entity: 'rounded=0;endArrow=none;dashed=1;html=1;',
  },
  _width: 4,
  _height: 150,
}

export function StereotypeNote4(props: NodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NOTE_4}
      {...props}
      _style={extendStyle(STEREOTYPE_NOTE_4, props)}
    />
  )
}
