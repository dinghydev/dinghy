import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE = {
  _style: {
    entity: 'shape=rect;fillColor=#F7F7F7;strokeColor=none;',
  },
  _width: 164,
  _height: 20,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
}
