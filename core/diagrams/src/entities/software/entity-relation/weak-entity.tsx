import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEAK_ENTITY = {
  _style: {
    entity: 'shape=ext;margin=3;double=1;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 100,
  _height: 40,
}

export function WeakEntity(props: NodeProps) {
  return (
    <Shape
      {...WEAK_ENTITY}
      {...props}
      _style={extendStyle(WEAK_ENTITY, props)}
    />
  )
}
