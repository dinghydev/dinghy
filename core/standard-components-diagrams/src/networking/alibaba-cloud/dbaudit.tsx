import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DBAUDIT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbaudit;',
  _width: 48.9,
  _height: 48.9,
}

export function Dbaudit(props: DiagramNodeProps) {
  return <Shape {...DBAUDIT} {...props} />
}
