import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHAT = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.chat;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 20,
  _height: 20,
}

export function Chat(props: DiagramNodeProps) {
  return <Shape {...CHAT} {...props} _style={extendStyle(CHAT, props)} />
}
