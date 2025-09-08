import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.message;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 37.5,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
}
