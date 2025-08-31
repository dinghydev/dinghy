import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECENT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Clock.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Recent(props: DiagramNodeProps) {
  return <Shape {...RECENT} {...props} _style={extendStyle(RECENT, props)} />
}
