import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAPHCOMPUTE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.graphcompute;',
  _width: 49.8,
  _height: 50.099999999999994,
}

export function Graphcompute(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRAPHCOMPUTE}
      {...props}
      _style={extendStyle(GRAPHCOMPUTE, props)}
    />
  )
}
