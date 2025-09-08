import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REPLY = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.reply;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 20,
  _original_height: 18,
}

export function Reply(props: DiagramNodeProps) {
  return <Shape {...REPLY} {...props} _style={extendStyle(REPLY, props)} />
}
