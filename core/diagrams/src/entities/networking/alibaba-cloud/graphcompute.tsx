import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GRAPHCOMPUTE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.graphcompute;',
  },
  _original_width: 49.8,
  _original_height: 50.099999999999994,
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
