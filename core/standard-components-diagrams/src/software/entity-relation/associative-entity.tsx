import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSOCIATIVE_ENTITY = {
  _style: {
    entity: 'shape=associativeEntity;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 140,
  _height: 60,
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
