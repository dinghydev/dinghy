import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_ETHERNET_IE300 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Industrial_Ethernet_IE300.svg;strokeColor=none;',
  },
  _original_width: 69.6,
  _original_height: 77.4,
}

export function IndustrialEthernetIe300(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_ETHERNET_IE300}
      {...props}
      _style={extendStyle(INDUSTRIAL_ETHERNET_IE300, props)}
    />
  )
}
