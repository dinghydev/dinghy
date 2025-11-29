import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOT_MITIGATION = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.bot_mitigation;',
  },
  _original_width: 50,
  _original_height: 45.885,
}

export function BotMitigation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOT_MITIGATION)} />
}
