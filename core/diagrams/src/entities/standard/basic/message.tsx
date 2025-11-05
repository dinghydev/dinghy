import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    entity:
      'shape=message;html=1;html=1;outlineConnect=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  },
  _width: 60,
  _height: 40,
}

export function Message(props: NodeProps) {
  return <Shape {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
}
