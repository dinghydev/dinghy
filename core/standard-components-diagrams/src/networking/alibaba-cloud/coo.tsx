import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.coo;',
  },
  _width: 43.5,
  _height: 47.400000000000006,
}

export function Coo(props: DiagramNodeProps) {
  return <Shape {...COO} {...props} _style={extendStyle(COO, props)} />
}
