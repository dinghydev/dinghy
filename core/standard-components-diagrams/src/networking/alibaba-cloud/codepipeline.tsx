import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CODEPIPELINE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.codepipeline;',
  _width: 41.1,
  _height: 52.2,
}

export function Codepipeline(props: DiagramNodeProps) {
  return <Shape {...CODEPIPELINE} {...props} />
}
