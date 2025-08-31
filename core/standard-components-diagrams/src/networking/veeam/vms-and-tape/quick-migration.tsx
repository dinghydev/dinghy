import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICK_MIGRATION = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.quick_migration;',
  _width: 44.8,
  _height: 44.8,
}

export function QuickMigration(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICK_MIGRATION}
      {...props}
      _style={extendStyle(QUICK_MIGRATION, props)}
    />
  )
}
