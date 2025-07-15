import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLS_SIMPLE_LOG_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sls_simple_log_service;',
  _width: 48,
  _height: 48,
}

export function SlsSimpleLogService(props: DiagramNodeProps) {
  return <Shape {...SLS_SIMPLE_LOG_SERVICE} {...props} />
}
