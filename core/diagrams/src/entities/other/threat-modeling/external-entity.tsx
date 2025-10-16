import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTERNAL_ENTITY = {
  _style: {
    entity: 'rounded=0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 60,
}

export function ExternalEntity(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_ENTITY}
      {...props}
      _style={extendStyle(EXTERNAL_ENTITY, props)}
    />
  )
}
