import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Media.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Media(props: DiagramNodeProps) {
  return <Shape {...MEDIA} {...props} _style={extendStyle(MEDIA, props)} />
}
