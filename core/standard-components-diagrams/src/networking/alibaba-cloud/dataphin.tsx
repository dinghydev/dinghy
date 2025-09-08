import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATAPHIN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dataphin;',
  },
  _original_width: 54.6,
  _original_height: 54.6,
}

export function Dataphin(props: DiagramNodeProps) {
  return (
    <Shape {...DATAPHIN} {...props} _style={extendStyle(DATAPHIN, props)} />
  )
}
