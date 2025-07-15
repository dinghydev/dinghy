import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_WORKFLOWS_FOR_APACHE_AIRFLOW = {
  _style:
    'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.managed_workflows_for_apache_airflow;',
  _width: 78,
  _height: 78,
}

export function ManagedWorkflowsForApacheAirflow(props: DiagramNodeProps) {
  return <Shape {...MANAGED_WORKFLOWS_FOR_APACHE_AIRFLOW} {...props} />
}
