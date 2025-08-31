import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.message;pointerEvents=1;',
  },
  _width: 50,
  _height: 37.5,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
}
