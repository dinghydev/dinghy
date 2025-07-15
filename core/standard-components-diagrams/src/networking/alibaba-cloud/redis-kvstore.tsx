import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REDIS_KVSTORE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.redis_kvstore;',
  _width: 52.5,
  _height: 41.4,
}

export function RedisKvstore(props: DiagramNodeProps) {
  return <Shape {...REDIS_KVSTORE} {...props} />
}
