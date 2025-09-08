import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_5 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#F2931E;strokeColor=none;shadow=0;',
  },
  _original_width: 5,
  _original_height: 190,
}

export function PercentageList5(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_5}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_5, props)}
    />
  )
}
