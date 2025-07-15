import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CACHE_PLUS_REDIS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cache_including_Redis.svg;',
  _width: 50,
  _height: 50,
}

export function CachePlusRedis(props: DiagramNodeProps) {
  return <Shape {...CACHE_PLUS_REDIS} {...props} />
}
