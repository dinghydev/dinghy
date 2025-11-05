import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISTRIBUTED_DIRECTOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.directors.distributed_director;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 64,
}

export function DistributedDirector(props: NodeProps) {
  return (
    <Shape
      {...DISTRIBUTED_DIRECTOR}
      {...props}
      _style={extendStyle(DISTRIBUTED_DIRECTOR, props)}
    />
  )
}
