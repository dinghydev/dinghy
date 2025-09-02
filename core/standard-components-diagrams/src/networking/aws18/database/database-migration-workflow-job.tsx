import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MIGRATION_WORKFLOW_JOB = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.database_migration_workflow_job;',
  },
  _original_width: 60,
  _original_height: 60,
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
