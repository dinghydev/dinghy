import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CACHE_REDIS_PRODUCT_ICON = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cache_Redis_Product.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function CacheRedisProductIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...CACHE_REDIS_PRODUCT_ICON}
      {...props}
      _style={extendStyle(CACHE_REDIS_PRODUCT_ICON, props)}
    />
  )
}
