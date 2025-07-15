import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE_DIAGRAM_2 = {
  _style:
    'text;verticalAlign=middle;align=center;fontColor=#FB9F41;fontStyle=1;html=1;whiteSpace=wrap;',
  _width: 1,
  _height: 24,
}

export function PackageDiagram2(props: DiagramNodeProps) {
  return <Shape {...PACKAGE_DIAGRAM_2} {...props} />
}
