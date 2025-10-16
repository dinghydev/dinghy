import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_24_PORT_L3_ALTERNATIVE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_24_port_L3_Alternative.svg;strokeColor=none;',
  },
  _width: 78,
  _height: 52.8,
}

export function Switch24PortL3Alternative(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_24_PORT_L3_ALTERNATIVE}
      {...props}
      _style={extendStyle(SWITCH_24_PORT_L3_ALTERNATIVE, props)}
    />
  )
}
