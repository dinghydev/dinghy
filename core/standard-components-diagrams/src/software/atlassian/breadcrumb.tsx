import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREADCRUMB = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontColor=#596780;align=left;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=0',
  },
  _original_width: 360,
  _original_height: 25,
}

export function Breadcrumb(props: DiagramNodeProps) {
  return (
    <Shape {...BREADCRUMB} {...props} _style={extendStyle(BREADCRUMB, props)} />
  )
}
