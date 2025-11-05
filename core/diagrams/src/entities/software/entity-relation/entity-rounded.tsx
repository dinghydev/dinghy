import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTITY_ROUNDED = {
  _style: {
    entity: 'rounded=1;arcSize=10;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 100,
  _height: 40,
}

export function EntityRounded(props: NodeProps) {
  return (
    <Shape
      {...ENTITY_ROUNDED}
      {...props}
      _style={extendStyle(ENTITY_ROUNDED, props)}
    />
  )
}
