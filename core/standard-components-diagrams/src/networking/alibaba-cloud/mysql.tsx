import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MYSQL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mysql;',
  _width: 48.300000000000004,
  _height: 45,
}

export function Mysql(props: DiagramNodeProps) {
  return <Shape {...MYSQL} {...props} />
}
