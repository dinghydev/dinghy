import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_10 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#dddddd;strokeColor=none;rounded=0;',
  },
  _original_width: 0,
  _original_height: 250,
}

export function PercentageList10(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_10}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_10, props)}
    />
  )
}
