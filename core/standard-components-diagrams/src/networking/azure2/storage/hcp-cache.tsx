import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HCP_CACHE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_HCP_Cache.svg;',
  _width: 68,
  _height: 63,
}

export function HcpCache(props: DiagramNodeProps) {
  return <Shape {...HCP_CACHE} {...props} />
}
