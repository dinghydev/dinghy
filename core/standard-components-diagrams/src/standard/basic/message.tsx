import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE = {
  _style:
    'shape=message;html=1;html=1;outlineConnect=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  _width: 60,
  _height: 40,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} />
}
