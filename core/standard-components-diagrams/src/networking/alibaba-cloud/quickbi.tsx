import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUICKBI = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.quickbi;',
  _width: 47.7,
  _height: 48,
}

export function Quickbi(props: DiagramNodeProps) {
  return <Shape {...QUICKBI} {...props} />
}
