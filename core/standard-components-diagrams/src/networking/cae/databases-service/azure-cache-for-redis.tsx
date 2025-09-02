import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_CACHE_FOR_REDIS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Cache_for_Redis.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureCacheForRedis(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_CACHE_FOR_REDIS}
      {...props}
      _style={extendStyle(AZURE_CACHE_FOR_REDIS, props)}
    />
  )
}
