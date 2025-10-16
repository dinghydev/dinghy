import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUBLIC_IP_PREFIXES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Prefixes.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 56.00000000000001,
}

export function PublicIpPrefixes(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLIC_IP_PREFIXES}
      {...props}
      _style={extendStyle(PUBLIC_IP_PREFIXES, props)}
    />
  )
}
