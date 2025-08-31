import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADAM_ADVANCED_DATABASE_AND_APPLICATION_MIGRATION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.adam_advanced_database_and_application_migration;',
  _width: 42.9,
  _height: 51.3,
}

export function AdamAdvancedDatabaseAndApplicationMigration(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ADAM_ADVANCED_DATABASE_AND_APPLICATION_MIGRATION}
      {...props}
      _style={extendStyle(
        ADAM_ADVANCED_DATABASE_AND_APPLICATION_MIGRATION,
        props,
      )}
    />
  )
}
