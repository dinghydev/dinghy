import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_CONFIG = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_config;',
  _width: 47.400000000000006,
  _height: 48,
}

export function CloudConfig(props: DiagramNodeProps) {
  return <Shape {...CLOUD_CONFIG} {...props} />
}
