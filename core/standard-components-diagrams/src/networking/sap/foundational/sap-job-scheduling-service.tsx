import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_JOB_SCHEDULING_SERVICE = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Job_Scheduling_service',
  _width: 50,
  _height: 50,
}

export function SapJobSchedulingService(props: DiagramNodeProps) {
  return <Shape {...SAP_JOB_SCHEDULING_SERVICE} {...props} />
}
