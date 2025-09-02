import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_COMPACT_2 = {
  _style: {
    entity: 'shape=ellipse;fillColor=#596780;strokeColor=none;html=1;sketch=0;',
  },
  _original_width: 1,
  _original_height: 33,
}

export function ButtonCompact2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_COMPACT_2}
      {...props}
      _style={extendStyle(BUTTON_COMPACT_2, props)}
    />
  )
}
