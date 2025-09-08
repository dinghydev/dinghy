import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_24_PORT_L2 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_24_port_L2.svg;strokeColor=none;',
  },
  _original_width: 74.4,
  _original_height: 51,
}

export function Switch24PortL2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_24_PORT_L2}
      {...props}
      _style={extendStyle(SWITCH_24_PORT_L2, props)}
    />
  )
}
