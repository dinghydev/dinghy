import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDAS_ENTERPRISE_DISTRIBUTED_APPLICATION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.edas_enterprise_distributed_application_service;',
  },
  _original_width: 46.5,
  _original_height: 47.400000000000006,
}

export function EdasEnterpriseDistributedApplicationService(props: NodeProps) {
  return (
    <Shape
      {...EDAS_ENTERPRISE_DISTRIBUTED_APPLICATION_SERVICE}
      {...props}
      _style={extendStyle(
        EDAS_ENTERPRISE_DISTRIBUTED_APPLICATION_SERVICE,
        props,
      )}
    />
  )
}
