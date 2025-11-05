import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTITY_OBJECT = {
  _style: {
    entity: 'ellipse;shape=umlEntity;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function EntityObject(props: NodeProps) {
  return (
    <Shape
      {...ENTITY_OBJECT}
      {...props}
      _style={extendStyle(ENTITY_OBJECT, props)}
    />
  )
}
