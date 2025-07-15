import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCESS_REVIEW = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Access_Review.svg;',
  _width: 50,
  _height: 50,
}

export function AccessReview(props: DiagramNodeProps) {
  return <Shape {...ACCESS_REVIEW} {...props} />
}
