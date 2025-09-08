import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_2 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_2',
  },
  _original_width: 78,
  _original_height: 100,
}

export function Database2(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE_2} {...props} _style={extendStyle(DATABASE_2, props)} />
  )
}
