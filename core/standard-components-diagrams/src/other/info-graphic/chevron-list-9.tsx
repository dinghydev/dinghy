import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEVRON_LIST_9 = {
  _style: {
    entity:
      'shape=rect;fillColor=#FCE7CD;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;rounded=0;',
  },
  _original_width: 8,
  _original_height: 420,
}

export function ChevronList9(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_9}
      {...props}
      _style={extendStyle(CHEVRON_LIST_9, props)}
    />
  )
}
