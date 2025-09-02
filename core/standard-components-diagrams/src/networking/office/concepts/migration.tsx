import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIGRATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.migration;',
  },
  _original_width: 59,
  _original_height: 34,
}

export function Migration(props: DiagramNodeProps) {
  return (
    <Shape {...MIGRATION} {...props} _style={extendStyle(MIGRATION, props)} />
  )
}
