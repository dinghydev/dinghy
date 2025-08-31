import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUBLIC_IP_PREFIXES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Public_IP_Prefixes.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 56.00000000000001,
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
