import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATAHUB = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.datahub;',
  },
  _original_width: 47.7,
  _original_height: 47.7,
}

export function Datahub(props: DiagramNodeProps) {
  return <Shape {...DATAHUB} {...props} _style={extendStyle(DATAHUB, props)} />
}
