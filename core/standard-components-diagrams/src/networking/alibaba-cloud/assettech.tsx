import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSETTECH = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.assettech;',
  _width: 43.199999999999996,
  _height: 41.699999999999996,
}

export function Assettech(props: DiagramNodeProps) {
  return <Shape {...ASSETTECH} {...props} />
}
