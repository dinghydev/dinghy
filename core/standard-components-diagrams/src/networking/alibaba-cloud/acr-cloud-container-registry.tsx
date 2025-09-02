import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACR_CLOUD_CONTAINER_REGISTRY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.acr_cloud_container_registry;',
  },
  _original_width: 48.6,
  _original_height: 56.4,
}

export function AcrCloudContainerRegistry(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACR_CLOUD_CONTAINER_REGISTRY}
      {...props}
      _style={extendStyle(ACR_CLOUD_CONTAINER_REGISTRY, props)}
    />
  )
}
