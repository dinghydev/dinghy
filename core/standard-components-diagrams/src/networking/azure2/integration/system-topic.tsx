import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEM_TOPIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/System_Topic.svg;strokeColor=none;',
  _width: 68,
  _height: 60,
}

export function SystemTopic(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYSTEM_TOPIC}
      {...props}
      _style={extendStyle(SYSTEM_TOPIC, props)}
    />
  )
}
