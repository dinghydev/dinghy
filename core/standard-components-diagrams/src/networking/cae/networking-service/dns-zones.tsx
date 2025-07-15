import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DNS_ZONES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DNS.svg;',
  _width: 50,
  _height: 50,
}

export function DnsZones(props: DiagramNodeProps) {
  return <Shape {...DNS_ZONES} {...props} />
}
