import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PORANA_PORTRAIT_ANALYSIS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.porana_portrait_analysis;',
  _width: 49.199999999999996,
  _height: 45.3,
}

export function PoranaPortraitAnalysis(props: DiagramNodeProps) {
  return <Shape {...PORANA_PORTRAIT_ANALYSIS} {...props} />
}
