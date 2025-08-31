import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YIDA = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.yida;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function Yida(props: DiagramNodeProps) {
  return <Shape {...YIDA} {...props} _style={extendStyle(YIDA, props)} />
}
