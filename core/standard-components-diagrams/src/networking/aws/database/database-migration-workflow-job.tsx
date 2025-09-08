import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_MIGRATION_WORKFLOW_JOB = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.database_migration_workflow_job;',
  },
  _original_width: 50,
  _original_height: 78,
}

export function DatabaseMigrationWorkflowJob(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MIGRATION_WORKFLOW_JOB}
      {...props}
      _style={extendStyle(DATABASE_MIGRATION_WORKFLOW_JOB, props)}
    />
  )
}
