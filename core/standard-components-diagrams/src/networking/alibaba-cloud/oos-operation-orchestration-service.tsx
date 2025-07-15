import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OOS_OPERATION_ORCHESTRATION_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.oos_operation_orchestration_service;',
  _width: 49.8,
  _height: 50.099999999999994,
}

export function OosOperationOrchestrationService(props: DiagramNodeProps) {
  return <Shape {...OOS_OPERATION_ORCHESTRATION_SERVICE} {...props} />
}
