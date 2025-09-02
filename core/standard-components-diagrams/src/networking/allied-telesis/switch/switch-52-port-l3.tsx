import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_52_PORT_L3 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_52_port_L3.svg;strokeColor=none;',
  },
  _original_width: 78,
  _original_height: 52.8,
}

export function Switch52PortL3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_52_PORT_L3}
      {...props}
      _style={extendStyle(SWITCH_52_PORT_L3, props)}
    />
  )
}
