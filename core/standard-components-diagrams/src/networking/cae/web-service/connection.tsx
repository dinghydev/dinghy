import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTION = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Connection.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 31,
}

export function Connection(props: DiagramNodeProps) {
  return (
    <Shape {...CONNECTION} {...props} _style={extendStyle(CONNECTION, props)} />
  )
}
