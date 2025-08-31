import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
