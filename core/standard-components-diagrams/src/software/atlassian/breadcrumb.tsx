import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BREADCRUMB = {
  _style:
    'fillColor=none;strokeColor=none;html=1;fontColor=#596780;align=left;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=0',
  _width: 360,
  _height: 25,
}

export function Breadcrumb(props: DiagramNodeProps) {
  return <Shape {...BREADCRUMB} {...props} />
}
