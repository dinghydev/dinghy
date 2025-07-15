import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATIVE_ENTITY = {
  _style: 'shape=associativeEntity;whiteSpace=wrap;html=1;align=center;',
  _width: 140,
  _height: 60,
}

export function AssociativeEntity(props: DiagramNodeProps) {
  return <Shape {...ASSOCIATIVE_ENTITY} {...props} />
}
