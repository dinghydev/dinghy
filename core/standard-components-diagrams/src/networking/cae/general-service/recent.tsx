import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RECENT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Clock.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Recent(props: DiagramNodeProps) {
  return <Shape {...RECENT} {...props} _style={extendStyle(RECENT, props)} />
}
