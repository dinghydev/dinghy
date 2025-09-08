import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DNS_MULTISTACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DNS_Multistack.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DnsMultistack(props: DiagramNodeProps) {
  return (
    <Shape
      {...DNS_MULTISTACK}
      {...props}
      _style={extendStyle(DNS_MULTISTACK, props)}
    />
  )
}
