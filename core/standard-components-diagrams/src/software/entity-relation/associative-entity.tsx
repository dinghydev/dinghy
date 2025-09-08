import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATIVE_ENTITY = {
  _style: {
    entity: 'shape=associativeEntity;whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 140,
  _original_height: 60,
}

export function AssociativeEntity(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSOCIATIVE_ENTITY}
      {...props}
      _style={extendStyle(ASSOCIATIVE_ENTITY, props)}
    />
  )
}
