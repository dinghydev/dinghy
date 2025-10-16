import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_24_PORT_L2_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_24_port_L2_POE.svg;strokeColor=none;',
  },
  _width: 74.4,
  _height: 51,
}

export function Switch24PortL2Poe(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_24_PORT_L2_POE}
      {...props}
      _style={extendStyle(SWITCH_24_PORT_L2_POE, props)}
    />
  )
}
