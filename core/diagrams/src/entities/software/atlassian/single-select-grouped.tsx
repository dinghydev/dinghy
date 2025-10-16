import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_SELECT_GROUPED = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;whiteSpace=wrap',
  },
  _width: 360,
  _height: 260,
}

export function SingleSelectGrouped(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SELECT_GROUPED}
      {...props}
      _style={extendStyle(SINGLE_SELECT_GROUPED, props)}
    />
  )
}
