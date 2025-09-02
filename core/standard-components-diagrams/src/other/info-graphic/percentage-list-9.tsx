import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_9 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#23445D;strokeColor=none;shadow=0;',
  },
  _original_width: 11,
  _original_height: 190,
}

export function PercentageList9(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_9}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_9, props)}
    />
  )
}
