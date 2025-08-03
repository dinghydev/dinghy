import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOG_STREAMING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Log_Streaming.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 67,
}

export function LogStreaming(props: DiagramNodeProps) {
  return <Shape {...LOG_STREAMING} {...props} />
}
