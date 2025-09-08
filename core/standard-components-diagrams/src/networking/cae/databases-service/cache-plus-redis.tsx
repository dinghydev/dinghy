import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CACHE_PLUS_REDIS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cache_including_Redis.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CachePlusRedis(props: DiagramNodeProps) {
  return (
    <Shape
      {...CACHE_PLUS_REDIS}
      {...props}
      _style={extendStyle(CACHE_PLUS_REDIS, props)}
    />
  )
}
