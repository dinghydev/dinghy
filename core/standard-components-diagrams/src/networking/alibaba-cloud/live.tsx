import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIVE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.live;',
  },
  _original_width: 48.9,
  _original_height: 44.7,
}

export function Live(props: DiagramNodeProps) {
  return <Shape {...LIVE} {...props} _style={extendStyle(LIVE, props)} />
}
