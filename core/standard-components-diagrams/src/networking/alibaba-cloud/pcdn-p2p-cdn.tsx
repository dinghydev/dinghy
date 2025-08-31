import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PCDN_P2P_CDN = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.pcdn_p2p_cdn;',
  _width: 39.900000000000006,
  _height: 46.5,
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
