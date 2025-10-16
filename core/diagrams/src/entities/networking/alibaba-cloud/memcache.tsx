import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEMCACHE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.memcache;',
  },
  _original_width: 50.099999999999994,
  _original_height: 45.3,
}

export function Memcache(props: DiagramNodeProps) {
  return (
    <Shape {...MEMCACHE} {...props} _style={extendStyle(MEMCACHE, props)} />
  )
}
