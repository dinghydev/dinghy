import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTOR_2 = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _original_width: 0,
  _original_height: 40,
}

export function Actor2(props: DiagramNodeProps) {
  return <Shape {...ACTOR_2} {...props} _style={extendStyle(ACTOR_2, props)} />
}
