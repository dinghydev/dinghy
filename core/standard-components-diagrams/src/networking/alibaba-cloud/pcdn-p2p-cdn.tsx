import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PCDN_P2P_CDN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.pcdn_p2p_cdn;',
  },
  _original_width: 39.900000000000006,
  _original_height: 46.5,
}

export function PcdnP2pCdn(props: DiagramNodeProps) {
  return (
    <Shape
      {...PCDN_P2P_CDN}
      {...props}
      _style={extendStyle(PCDN_P2P_CDN, props)}
    />
  )
}
