import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_MIGRATION_WIZARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.data_migration_wizard',
  },
  _width: 50,
  _height: 48,
}

export function DataMigrationWizard(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_MIGRATION_WIZARD}
      {...props}
      _style={extendStyle(DATA_MIGRATION_WIZARD, props)}
    />
  )
}
