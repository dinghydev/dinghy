import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTITY_2 = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function Entity2(props: DiagramNodeProps) {
  return (
    <Shape {...ENTITY_2} {...props} _style={extendStyle(ENTITY_2, props)} />
  )
}
