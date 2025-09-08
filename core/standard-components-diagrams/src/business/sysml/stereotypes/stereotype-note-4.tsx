import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEREOTYPE_NOTE_4 = {
  _style: {
    entity: 'rounded=0;endArrow=none;dashed=1;html=1;',
  },
  _original_width: 4,
  _original_height: 150,
}

export function StereotypeNote4(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NOTE_4}
      {...props}
      _style={extendStyle(STEREOTYPE_NOTE_4, props)}
    />
  )
}
