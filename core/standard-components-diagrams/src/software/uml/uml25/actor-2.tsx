import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTOR_2 = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;dashed=0;whiteSpace=wrap;',
  },
  _original_width: 160,
  _original_height: 70,
}

export function Actor2(props: DiagramNodeProps) {
  return <Shape {...ACTOR_2} {...props} _style={extendStyle(ACTOR_2, props)} />
}
