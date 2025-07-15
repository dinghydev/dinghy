import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOT_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Bot_Services.svg;',
  _width: 68,
  _height: 68,
}

export function BotServices(props: DiagramNodeProps) {
  return <Shape {...BOT_SERVICES} {...props} />
}
