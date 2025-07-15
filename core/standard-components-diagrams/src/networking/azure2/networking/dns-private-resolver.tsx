import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DNS_PRIVATE_RESOLVER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Private_Resolver.svg;',
  _width: 68,
  _height: 60,
}

export function DnsPrivateResolver(props: DiagramNodeProps) {
  return <Shape {...DNS_PRIVATE_RESOLVER} {...props} />
}
