import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIA_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/Azure_Media_Service.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function MediaService(props: DiagramNodeProps) {
  return <Shape {...MEDIA_SERVICE} {...props} />
}
