import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTITY_OBJECT = {
  _style: {
    entity: 'ellipse;shape=umlEntity;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function EntityObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTITY_OBJECT}
      {...props}
      _style={extendStyle(ENTITY_OBJECT, props)}
    />
  )
}
