import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLICKHOUSE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.clickhouse;',
  },
  _width: 48,
  _height: 54.900000000000006,
}

export function Clickhouse(props: DiagramNodeProps) {
  return (
    <Shape {...CLICKHOUSE} {...props} _style={extendStyle(CLICKHOUSE, props)} />
  )
}
