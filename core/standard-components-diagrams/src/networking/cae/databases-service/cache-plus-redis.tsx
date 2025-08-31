import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CACHE_PLUS_REDIS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cache_including_Redis.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
