import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGESEARCH = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imagesearch;',
  _width: 47.7,
  _height: 47.7,
}

export function Imagesearch(props: DiagramNodeProps) {
  return <Shape {...IMAGESEARCH} {...props} />
}
