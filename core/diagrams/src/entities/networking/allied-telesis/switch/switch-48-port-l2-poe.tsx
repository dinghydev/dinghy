import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_48_PORT_L2_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_48_port_L2_POE.svg;strokeColor=none;',
  },
  _width: 78,
  _height: 52.8,
}

export function Switch48PortL2Poe(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_48_PORT_L2_POE}
      {...props}
      _style={extendStyle(SWITCH_48_PORT_L2_POE, props)}
    />
  )
}
