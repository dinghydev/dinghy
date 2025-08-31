import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQLSERVER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sqlserver;',
  },
  _width: 39.6,
  _height: 54.900000000000006,
}

export function Sqlserver(props: DiagramNodeProps) {
  return (
    <Shape {...SQLSERVER} {...props} _style={extendStyle(SQLSERVER, props)} />
  )
}
