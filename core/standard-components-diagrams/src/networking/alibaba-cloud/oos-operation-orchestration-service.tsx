import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OOS_OPERATION_ORCHESTRATION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.oos_operation_orchestration_service;',
  },
  _original_width: 49.8,
  _original_height: 50.099999999999994,
}

export function OosOperationOrchestrationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...OOS_OPERATION_ORCHESTRATION_SERVICE}
      {...props}
      _style={extendStyle(OOS_OPERATION_ORCHESTRATION_SERVICE, props)}
    />
  )
}
