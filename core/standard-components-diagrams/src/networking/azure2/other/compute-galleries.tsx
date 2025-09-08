import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTE_GALLERIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Compute_Galleries.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
