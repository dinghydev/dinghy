import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROS_RESOURCE_ORCHESTRATION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ros_resource_orchestration_service;',
  },
  _original_width: 50.099999999999994,
  _original_height: 43.5,
}

export function RosResourceOrchestrationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROS_RESOURCE_ORCHESTRATION_SERVICE}
      {...props}
      _style={extendStyle(ROS_RESOURCE_ORCHESTRATION_SERVICE, props)}
    />
  )
}
