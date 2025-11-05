import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOT_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Bot_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function BotServices(props: NodeProps) {
  return (
    <Shape
      {...BOT_SERVICES}
      {...props}
      _style={extendStyle(BOT_SERVICES, props)}
    />
  )
}
