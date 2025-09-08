import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DBAUDIT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbaudit;',
  },
  _original_width: 48.9,
  _original_height: 48.9,
}

export function Dbaudit(props: DiagramNodeProps) {
  return <Shape {...DBAUDIT} {...props} _style={extendStyle(DBAUDIT, props)} />
}
