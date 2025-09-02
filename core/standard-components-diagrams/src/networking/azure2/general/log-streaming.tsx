import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOG_STREAMING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Log_Streaming.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 67,
}

export function LogStreaming(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOG_STREAMING}
      {...props}
      _style={extendStyle(LOG_STREAMING, props)}
    />
  )
}
