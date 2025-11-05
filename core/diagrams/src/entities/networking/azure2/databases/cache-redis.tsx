import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CACHE_REDIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Cache_Redis.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function CacheRedis(props: NodeProps) {
  return (
    <Shape
      {...CACHE_REDIS}
      {...props}
      _style={extendStyle(CACHE_REDIS, props)}
    />
  )
}
