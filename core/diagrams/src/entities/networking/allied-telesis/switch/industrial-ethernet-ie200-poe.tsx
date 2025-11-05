import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_ETHERNET_IE200_POE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Industrial_Ethernet_IE200_POE.svg;strokeColor=none;',
  },
  _original_width: 40.2,
  _original_height: 56.4,
}

export function IndustrialEthernetIe200Poe(props: NodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_ETHERNET_IE200_POE}
      {...props}
      _style={extendStyle(INDUSTRIAL_ETHERNET_IE200_POE, props)}
    />
  )
}
