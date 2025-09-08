import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAG = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tag.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Tag(props: DiagramNodeProps) {
  return <Shape {...TAG} {...props} _style={extendStyle(TAG, props)} />
}
