import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_CACHE_FOR_REDIS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Cache_for_Redis.svg;',
  _width: 50,
  _height: 50,
}

export function AzureCacheForRedis(props: DiagramNodeProps) {
  return <Shape {...AZURE_CACHE_FOR_REDIS} {...props} />
}
