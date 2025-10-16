import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTOR_2 = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function Actor2(props: DiagramNodeProps) {
  return <Shape {...ACTOR_2} {...props} _style={extendStyle(ACTOR_2, props)} />
}
