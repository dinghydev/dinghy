import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATCHCOMPUTE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.batchcompute;',
  _width: 46.800000000000004,
  _height: 48,
}

export function Batchcompute(props: DiagramNodeProps) {
  return (
    <Shape
      {...BATCHCOMPUTE}
      {...props}
      _style={extendStyle(BATCHCOMPUTE, props)}
    />
  )
}
