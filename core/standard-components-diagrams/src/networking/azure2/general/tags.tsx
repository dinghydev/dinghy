import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Tags.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 65,
}

export function Tags(props: DiagramNodeProps) {
  return <Shape {...TAGS} {...props} _style={extendStyle(TAGS, props)} />
}
