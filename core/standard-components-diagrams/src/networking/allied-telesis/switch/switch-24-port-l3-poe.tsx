import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_24_PORT_L3_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_24_port_L3_POE.svg;strokeColor=none;',
  },
  _original_width: 74.4,
  _original_height: 51,
}

export function Switch24PortL3Poe(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_24_PORT_L3_POE}
      {...props}
      _style={extendStyle(SWITCH_24_PORT_L3_POE, props)}
    />
  )
}
