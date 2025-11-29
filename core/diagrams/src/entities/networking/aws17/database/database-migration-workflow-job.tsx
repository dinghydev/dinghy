import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MIGRATION_WORKFLOW_JOB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.database_migration_workflow_job;fillColor=#2E73B8;gradientColor=none;pointerEvents=1',
  },
  _width: 46.5,
  _height: 87,
}

export function DatabaseMigrationWorkflowJob(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DATABASE_MIGRATION_WORKFLOW_JOB)}
    />
  )
}
