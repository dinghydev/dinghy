import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATAPHIN = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dataphin;',
  _width: 54.6,
  _height: 54.6,
}

export function Dataphin(props: DiagramNodeProps) {
  return <Shape {...DATAPHIN} {...props} />
}
