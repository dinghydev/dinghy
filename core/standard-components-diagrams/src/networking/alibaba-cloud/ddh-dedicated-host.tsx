import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DDH_DEDICATED_HOST = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ddh_dedicated_host;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function DdhDedicatedHost(props: DiagramNodeProps) {
  return <Shape {...DDH_DEDICATED_HOST} {...props} />
}
