import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MIGRATION_WORKFLOW_JOB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.database_migration_workflow_job;fillColor=#5294CF;gradientColor=none;pointerEvents=1',
  },
  _width: 46.5,
  _height: 87,
}

export function DatabaseMigrationWorkflowJob(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_MIGRATION_WORKFLOW_JOB}
      {...props}
      _style={extendStyle(DATABASE_MIGRATION_WORKFLOW_JOB, props)}
    />
  )
}
