import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HBASE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hbase;',
  },
  _width: 45.3,
  _height: 45.6,
}

export function Hbase(props: DiagramNodeProps) {
  return <Shape {...HBASE} {...props} _style={extendStyle(HBASE, props)} />
}
