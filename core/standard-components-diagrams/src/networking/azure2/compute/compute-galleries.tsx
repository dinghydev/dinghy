import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTE_GALLERIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Compute_Galleries.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ComputeGalleries(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTE_GALLERIES}
      {...props}
      _style={extendStyle(COMPUTE_GALLERIES, props)}
    />
  )
}
