import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTITY_2 = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;align=center;',
  },
  _width: 100,
  _height: 40,
}

export function Entity2(props: NodeProps) {
  return (
    <Shape {...ENTITY_2} {...props} _style={extendStyle(ENTITY_2, props)} />
  )
}
