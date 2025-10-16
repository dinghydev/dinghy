import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDIA_OBJECT_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#000000;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=left;spacing=2;fontSize=14;verticalAlign=top;html=1;',
  },
  _width: 1,
  _height: 90,
}

export function MediaObject2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_OBJECT_2}
      {...props}
      _style={extendStyle(MEDIA_OBJECT_2, props)}
    />
  )
}
