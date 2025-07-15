import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPPC = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sppc;',
  _width: 50.4,
  _height: 44.1,
}

export function Sppc(props: DiagramNodeProps) {
  return <Shape {...SPPC} {...props} />
}
