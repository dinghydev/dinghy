import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POLARDB = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.polardb;',
  _width: 55.5,
  _height: 57.3,
}

export function Polardb(props: DiagramNodeProps) {
  return <Shape {...POLARDB} {...props} />
}
