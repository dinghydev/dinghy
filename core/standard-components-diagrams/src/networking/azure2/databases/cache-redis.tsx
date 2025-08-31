import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CACHE_REDIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Cache_Redis.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 52,
}

export function CacheRedis(props: DiagramNodeProps) {
  return (
    <Shape
      {...CACHE_REDIS}
      {...props}
      _style={extendStyle(CACHE_REDIS, props)}
    />
  )
}
