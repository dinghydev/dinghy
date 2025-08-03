import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTE_GALLERIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Compute_Galleries.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ComputeGalleries(props: DiagramNodeProps) {
  return <Shape {...COMPUTE_GALLERIES} {...props} />
}
