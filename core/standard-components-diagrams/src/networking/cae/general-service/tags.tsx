import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAGS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tags.svg;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 50,
}

export function Tags(props: DiagramNodeProps) {
  return <Shape {...TAGS} {...props} _style={extendStyle(TAGS, props)} />
}
