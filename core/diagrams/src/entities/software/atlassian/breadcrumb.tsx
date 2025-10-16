import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BREADCRUMB = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontColor=#596780;align=left;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=0',
  },
  _width: 360,
  _height: 25,
}

export function Breadcrumb(props: DiagramNodeProps) {
  return (
    <Shape {...BREADCRUMB} {...props} _style={extendStyle(BREADCRUMB, props)} />
  )
}
