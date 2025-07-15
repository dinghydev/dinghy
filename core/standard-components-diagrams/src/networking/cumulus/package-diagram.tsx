import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE_DIAGRAM = {
  _style:
    'rounded=0;whiteSpace=wrap;html=1;fillColor=#FB9F41;strokeColor=none;fontColor=#FFFFFF;whiteSpace=wrap;',
  _width: 0,
  _height: 24,
}

export function PackageDiagram(props: DiagramNodeProps) {
  return <Shape {...PACKAGE_DIAGRAM} {...props} />
}
