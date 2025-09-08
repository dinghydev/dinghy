import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DNS_ZONES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DNS.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DnsZones(props: DiagramNodeProps) {
  return (
    <Shape {...DNS_ZONES} {...props} _style={extendStyle(DNS_ZONES, props)} />
  )
}
