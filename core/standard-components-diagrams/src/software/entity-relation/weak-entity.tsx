import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEAK_ENTITY = {
  _style: {
    entity: 'shape=ext;margin=3;double=1;whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function WeakEntity(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEAK_ENTITY}
      {...props}
      _style={extendStyle(WEAK_ENTITY, props)}
    />
  )
}
