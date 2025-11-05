import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Tag.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.8,
}

export function Tag(props: NodeProps) {
  return <Shape {...TAG} {...props} _style={extendStyle(TAG, props)} />
}
