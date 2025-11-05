import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BREAKTHROUGH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.breakthrough2;',
  },
  _width: 38,
  _height: 100,
}

export function Breakthrough(props: NodeProps) {
  return (
    <Shape
      {...BREAKTHROUGH}
      {...props}
      _style={extendStyle(BREAKTHROUGH, props)}
    />
  )
}
