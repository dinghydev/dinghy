import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUSTRIAL_ETHERNET_IE200 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Industrial_Ethernet_IE200.svg;strokeColor=none;',
  },
  _width: 40.2,
  _height: 56.4,
}

export function IndustrialEthernetIe200(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_ETHERNET_IE200}
      {...props}
      _style={extendStyle(INDUSTRIAL_ETHERNET_IE200, props)}
    />
  )
}
