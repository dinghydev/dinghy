import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT_FIELD = {
  _style:
    'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#596780;fontStyle=1;fontSize=11',
  _width: 0,
  _height: 58,
}

export function TextField(props: DiagramNodeProps) {
  return (
    <Shape {...TEXT_FIELD} {...props} _style={extendStyle(TEXT_FIELD, props)} />
  )
}
