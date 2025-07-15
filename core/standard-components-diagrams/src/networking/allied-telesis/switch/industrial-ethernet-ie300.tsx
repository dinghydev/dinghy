import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUSTRIAL_ETHERNET_IE300 = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Industrial_Ethernet_IE300.svg;',
  _width: 69.6,
  _height: 77.4,
}

export function IndustrialEthernetIe300(props: DiagramNodeProps) {
  return <Shape {...INDUSTRIAL_ETHERNET_IE300} {...props} />
}
