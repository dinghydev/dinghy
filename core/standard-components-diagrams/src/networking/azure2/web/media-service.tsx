import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/Azure_Media_Service.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function MediaService(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_SERVICE}
      {...props}
      _style={extendStyle(MEDIA_SERVICE, props)}
    />
  )
}
