import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_8 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#BAC8D3;strokeColor=none;',
  },
  _original_width: 10,
  _original_height: 190,
}

export function PercentageList8(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_8}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_8, props)}
    />
  )
}
