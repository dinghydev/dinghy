import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REDIS_KVSTORE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.redis_kvstore;',
  },
  _original_width: 52.5,
  _original_height: 41.4,
}

export function RedisKvstore(props: DiagramNodeProps) {
  return (
    <Shape
      {...REDIS_KVSTORE}
      {...props}
      _style={extendStyle(REDIS_KVSTORE, props)}
    />
  )
}
