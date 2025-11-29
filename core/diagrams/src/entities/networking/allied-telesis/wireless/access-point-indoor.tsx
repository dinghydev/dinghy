import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCESS_POINT_INDOOR = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/wireless/Access_Point_Indoor.svg;strokeColor=none;',
  },
  _width: 36.6,
  _height: 54.6,
}

export function AccessPointIndoor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACCESS_POINT_INDOOR)} />
}
