import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XDRAGON_BARE_METAL_SERVER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.xdragon_bare_metal_server;',
  _width: 49.199999999999996,
  _height: 47.7,
}

export function XdragonBareMetalServer(props: DiagramNodeProps) {
  return <Shape {...XDRAGON_BARE_METAL_SERVER} {...props} />
}
