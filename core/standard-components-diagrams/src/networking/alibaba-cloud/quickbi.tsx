import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUICKBI = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.quickbi;',
  },
  _original_width: 47.7,
  _original_height: 48,
}

export function Quickbi(props: DiagramNodeProps) {
  return <Shape {...QUICKBI} {...props} _style={extendStyle(QUICKBI, props)} />
}
