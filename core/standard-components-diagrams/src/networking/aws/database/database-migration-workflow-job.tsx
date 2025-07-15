import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_MIGRATION_WORKFLOW_JOB = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.database_migration_workflow_job;',
  _width: 50,
  _height: 78,
}

export function DatabaseMigrationWorkflowJob(props: DiagramNodeProps) {
  return <Shape {...DATABASE_MIGRATION_WORKFLOW_JOB} {...props} />
}
