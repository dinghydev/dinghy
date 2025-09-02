import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACKED_OWNERSHIP = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.stacked_ownership',
  },
  _original_width: 100,
  _original_height: 100,
}

export function StackedOwnership(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKED_OWNERSHIP}
      {...props}
      _style={extendStyle(STACKED_OWNERSHIP, props)}
    />
  )
}
