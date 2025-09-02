import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISTRIBUTED_DIRECTOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.directors.distributed_director;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 91,
  _original_height: 64,
}

export function DistributedDirector(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISTRIBUTED_DIRECTOR}
      {...props}
      _style={extendStyle(DISTRIBUTED_DIRECTOR, props)}
    />
  )
}
