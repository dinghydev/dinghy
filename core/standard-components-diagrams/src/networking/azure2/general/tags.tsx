import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Tags.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 65,
}

export function Tags(props: DiagramNodeProps) {
  return <Shape {...TAGS} {...props} _style={extendStyle(TAGS, props)} />
}
