import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CACHE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cache.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Cache(props: DiagramNodeProps) {
  return <Shape {...CACHE} {...props} _style={extendStyle(CACHE, props)} />
}
