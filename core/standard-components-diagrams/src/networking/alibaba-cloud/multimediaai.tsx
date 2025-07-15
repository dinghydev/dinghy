import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIMEDIAAI = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.multimediaai;',
  _width: 60,
  _height: 59.1,
}

export function Multimediaai(props: DiagramNodeProps) {
  return <Shape {...MULTIMEDIAAI} {...props} />
}
