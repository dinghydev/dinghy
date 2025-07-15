import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_ENDPOINT_2 = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#c0f5a9;strokeColor=#000000;verticalLabelPosition=bottom;verticalAlign=top;html=1;',
  _width: 400,
  _height: 90,
}

export function MessageEndpoint2(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_ENDPOINT_2} {...props} />
}
