import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNAPSHOT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.snapshot;fillColor=#4286c5;strokeColor=#57A2D8;aspect=fixed;',
  },
  _original_width: 92,
  _original_height: 60,
}

export function Snapshot(props: DiagramNodeProps) {
  return (
    <Shape {...SNAPSHOT} {...props} _style={extendStyle(SNAPSHOT, props)} />
  )
}
