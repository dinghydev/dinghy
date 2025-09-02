import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOLOWATCHER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.holowatcher;',
  },
  _original_width: 43.199999999999996,
  _original_height: 50.099999999999994,
}

export function Holowatcher(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOLOWATCHER}
      {...props}
      _style={extendStyle(HOLOWATCHER, props)}
    />
  )
}
