import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTERNAL_ENTITY = {
  _style: 'rounded=0;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 60,
}

export function ExternalEntity(props: DiagramNodeProps) {
  return <Shape {...EXTERNAL_ENTITY} {...props} />
}
