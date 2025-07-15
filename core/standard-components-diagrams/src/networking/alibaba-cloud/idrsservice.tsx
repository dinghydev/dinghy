import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IDRSSERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.idrsservice;',
  _width: 56.1,
  _height: 56.1,
}

export function Idrsservice(props: DiagramNodeProps) {
  return <Shape {...IDRSSERVICE} {...props} />
}
