import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_ZONES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Zones.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function DnsZones(props: DiagramNodeProps) {
  return (
    <Shape {...DNS_ZONES} {...props} _style={extendStyle(DNS_ZONES, props)} />
  )
}
