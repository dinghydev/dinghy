import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_ZONES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DNS.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DnsZones(props: DiagramNodeProps) {
  return (
    <Shape {...DNS_ZONES} {...props} _style={extendStyle(DNS_ZONES, props)} />
  )
}
