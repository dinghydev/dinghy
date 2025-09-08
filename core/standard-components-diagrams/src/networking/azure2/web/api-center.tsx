import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const API_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/API_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ApiCenter(props: DiagramNodeProps) {
  return (
    <Shape {...API_CENTER} {...props} _style={extendStyle(API_CENTER, props)} />
  )
}
