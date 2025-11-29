import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATIVE_ENTITY = {
  _style: {
    entity: 'shape=associativeEntity;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 140,
  _height: 60,
}

export function AssociativeEntity(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ASSOCIATIVE_ENTITY)} />
}
