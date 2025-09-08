import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDIA = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Media.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Media(props: DiagramNodeProps) {
  return <Shape {...MEDIA} {...props} _style={extendStyle(MEDIA, props)} />
}
