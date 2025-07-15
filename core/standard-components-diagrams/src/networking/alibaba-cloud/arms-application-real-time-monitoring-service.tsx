import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARMS_APPLICATION_REAL_TIME_MONITORING_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.arms_application_real-time_monitoring_service;',
  _width: 54.900000000000006,
  _height: 26.4,
}

export function ArmsApplicationRealTimeMonitoringService(
  props: DiagramNodeProps,
) {
  return <Shape {...ARMS_APPLICATION_REAL_TIME_MONITORING_SERVICE} {...props} />
}
