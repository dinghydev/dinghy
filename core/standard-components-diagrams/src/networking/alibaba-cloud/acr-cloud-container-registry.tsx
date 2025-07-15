import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACR_CLOUD_CONTAINER_REGISTRY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.acr_cloud_container_registry;',
  _width: 48.6,
  _height: 56.4,
}

export function AcrCloudContainerRegistry(props: DiagramNodeProps) {
  return <Shape {...ACR_CLOUD_CONTAINER_REGISTRY} {...props} />
}
