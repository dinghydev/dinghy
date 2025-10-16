import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CODESTORE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.codestore;',
  },
  _original_width: 43.199999999999996,
  _original_height: 41.699999999999996,
}

export function Codestore(props: DiagramNodeProps) {
  return (
    <Shape {...CODESTORE} {...props} _style={extendStyle(CODESTORE, props)} />
  )
}
