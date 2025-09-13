import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    entity: 'edgeStyle=none;dashed=1;html=1;endArrow=none;',
  },
  _width: 2,
  _height: 250,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
}
