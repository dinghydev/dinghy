import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CACHE_REDIS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Cache_Redis.svg;',
  _width: 64,
  _height: 52,
}

export function CacheRedis(props: DiagramNodeProps) {
  return <Shape {...CACHE_REDIS} {...props} />
}
