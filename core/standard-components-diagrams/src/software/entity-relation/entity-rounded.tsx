import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTITY_ROUNDED = {
  _style: 'rounded=1;arcSize=10;whiteSpace=wrap;html=1;align=center;',
  _width: 100,
  _height: 40,
}

export function EntityRounded(props: DiagramNodeProps) {
  return <Shape {...ENTITY_ROUNDED} {...props} />
}
