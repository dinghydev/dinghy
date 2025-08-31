import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_PRIVATE_ZONES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DNS_Private_Zones.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DnsPrivateZones(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_PRIVATE_ZONES}
      {...props}
      _style={extendStyle(DNS_PRIVATE_ZONES, props)}
    />
  )
}
