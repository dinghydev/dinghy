import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/Azure_Media_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MediaService(props: NodeProps) {
  return (
    <Shape
      {...MEDIA_SERVICE}
      {...props}
      _style={extendStyle(MEDIA_SERVICE, props)}
    />
  )
}
