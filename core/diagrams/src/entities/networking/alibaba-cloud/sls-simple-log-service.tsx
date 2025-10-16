import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLS_SIMPLE_LOG_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sls_simple_log_service;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function SlsSimpleLogService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLS_SIMPLE_LOG_SERVICE}
      {...props}
      _style={extendStyle(SLS_SIMPLE_LOG_SERVICE, props)}
    />
  )
}
