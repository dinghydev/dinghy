import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCESS_POINT_OUTDOOR = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/wireless/Access_Point_Outdoor.svg;strokeColor=none;',
  },
  _original_width: 25.8,
  _original_height: 99.6,
}

export function AccessPointOutdoor(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCESS_POINT_OUTDOOR}
      {...props}
      _style={extendStyle(ACCESS_POINT_OUTDOOR, props)}
    />
  )
}
