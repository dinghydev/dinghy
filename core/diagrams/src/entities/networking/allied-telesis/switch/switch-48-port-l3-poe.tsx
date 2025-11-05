import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWITCH_48_PORT_L3_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Switch_48_port_L3_POE.svg;strokeColor=none;',
  },
  _width: 78,
  _height: 52.8,
}

export function Switch48PortL3Poe(props: NodeProps) {
  return (
    <Shape
      {...SWITCH_48_PORT_L3_POE}
      {...props}
      _style={extendStyle(SWITCH_48_PORT_L3_POE, props)}
    />
  )
}
