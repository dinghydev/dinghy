import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_MIGRATION_WIZARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.data_migration_wizard',
  },
  _original_width: 50,
  _original_height: 48,
}

export function DataMigrationWizard(props: NodeProps) {
  return (
    <Shape
      {...DATA_MIGRATION_WIZARD}
      {...props}
      _style={extendStyle(DATA_MIGRATION_WIZARD, props)}
    />
  )
}
