import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.message;',
  },
  _width: 30,
  _height: 19.5,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
}
