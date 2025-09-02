import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTED_CACHE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Connected_Cache.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.00000000000001,
}

export function ConnectedCache(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONNECTED_CACHE}
      {...props}
      _style={extendStyle(CONNECTED_CACHE, props)}
    />
  )
}
