import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BEIAN = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.beian;',
  _width: 47.1,
  _height: 48.300000000000004,
}

export function Beian(props: DiagramNodeProps) {
  return <Shape {...BEIAN} {...props} />
}
