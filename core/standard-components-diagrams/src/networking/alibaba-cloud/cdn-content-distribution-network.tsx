import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CDN_CONTENT_DISTRIBUTION_NETWORK = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cdn_content_distribution_network;',
  _width: 51,
  _height: 42.3,
}

export function CdnContentDistributionNetwork(props: DiagramNodeProps) {
  return <Shape {...CDN_CONTENT_DISTRIBUTION_NETWORK} {...props} />
}
