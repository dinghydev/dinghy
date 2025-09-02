import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Bug.svg;strokeColor=none;',
  },
  _original_width: 59,
  _original_height: 64,
}

export function Bug(props: DiagramNodeProps) {
  return <Shape {...BUG} {...props} _style={extendStyle(BUG, props)} />
}
