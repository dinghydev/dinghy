import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BCCLUSTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bccluster;',
  _width: 50.099999999999994,
  _height: 37.2,
}

export function Bccluster(props: DiagramNodeProps) {
  return <Shape {...BCCLUSTER} {...props} />
}
