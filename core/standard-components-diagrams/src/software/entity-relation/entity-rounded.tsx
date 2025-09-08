import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTITY_ROUNDED = {
  _style: {
    entity: 'rounded=1;arcSize=10;whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function EntityRounded(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTITY_ROUNDED}
      {...props}
      _style={extendStyle(ENTITY_ROUNDED, props)}
    />
  )
}
