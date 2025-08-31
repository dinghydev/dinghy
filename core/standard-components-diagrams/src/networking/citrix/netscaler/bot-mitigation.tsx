import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOT_MITIGATION = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.bot_mitigation;',
  _width: 50,
  _height: 45.885,
}

export function BotMitigation(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOT_MITIGATION}
      {...props}
      _style={extendStyle(BOT_MITIGATION, props)}
    />
  )
}
