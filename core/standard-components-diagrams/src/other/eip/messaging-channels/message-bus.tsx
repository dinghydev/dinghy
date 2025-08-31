import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_BUS = {
  _style: {
    entity:
      'strokeWidth=2;strokeColor=#000000;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.messageChannel;',
  },
  _width: 120,
  _height: 140,
}

export function MessageBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_BUS}
      {...props}
      _style={extendStyle(MESSAGE_BUS, props)}
    />
  )
}
