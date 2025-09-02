import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_COMPACT = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;fontSize=12;sketch=0;',
  },
  _original_width: 0,
  _original_height: 33,
}

export function ButtonCompact(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_COMPACT}
      {...props}
      _style={extendStyle(BUTTON_COMPACT, props)}
    />
  )
}
