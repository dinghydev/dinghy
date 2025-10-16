import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_SELECT = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;whiteSpace=wrap;',
  },
  _width: 270,
  _height: 390,
}

export function MultiSelect(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_SELECT}
      {...props}
      _style={extendStyle(MULTI_SELECT, props)}
    />
  )
}
