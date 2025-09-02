import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_48_PORT_L2 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_48_port_L2.svg;strokeColor=none;',
  },
  _original_width: 78,
  _original_height: 52.8,
}

export function Switch48PortL2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_48_PORT_L2}
      {...props}
      _style={extendStyle(SWITCH_48_PORT_L2, props)}
    />
  )
}
