import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HCP_CACHE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_HCP_Cache.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63,
}

export function HcpCache(props: DiagramNodeProps) {
  return (
    <Shape {...HCP_CACHE} {...props} _style={extendStyle(HCP_CACHE, props)} />
  )
}
