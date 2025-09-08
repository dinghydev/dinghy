import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DNS_PRIVATE_RESOLVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Private_Resolver.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
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
