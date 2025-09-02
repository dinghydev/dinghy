import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Error3(props: DiagramNodeProps) {
  return <Shape {...ERROR_3} {...props} _style={extendStyle(ERROR_3, props)} />
}
