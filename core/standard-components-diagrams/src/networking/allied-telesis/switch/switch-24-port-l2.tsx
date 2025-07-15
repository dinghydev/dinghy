import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH_24_PORT_L2 = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_24_port_L2.svg;',
  _width: 74.4,
  _height: 51,
}

export function Switch24PortL2(props: DiagramNodeProps) {
  return <Shape {...SWITCH_24_PORT_L2} {...props} />
}
