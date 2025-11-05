import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UPDATE_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Update_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function UpdateCenter(props: NodeProps) {
  return (
    <Shape
      {...UPDATE_CENTER}
      {...props}
      _style={extendStyle(UPDATE_CENTER, props)}
    />
  )
}
