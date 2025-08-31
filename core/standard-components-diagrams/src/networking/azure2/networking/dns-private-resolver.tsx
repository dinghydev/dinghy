import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DNS_PRIVATE_RESOLVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Private_Resolver.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60,
}

export function DnsPrivateResolver(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_PRIVATE_RESOLVER}
      {...props}
      _style={extendStyle(DNS_PRIVATE_RESOLVER, props)}
    />
  )
}
