import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTITY_OBJECT = {
  _style: 'ellipse;shape=umlEntity;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function EntityObject(props: DiagramNodeProps) {
  return <Shape {...ENTITY_OBJECT} {...props} />
}
