import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCESS_REVIEW = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Access_Review.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AccessReview(props: NodeProps) {
  return (
    <Shape
      {...ACCESS_REVIEW}
      {...props}
      _style={extendStyle(ACCESS_REVIEW, props)}
    />
  )
}
