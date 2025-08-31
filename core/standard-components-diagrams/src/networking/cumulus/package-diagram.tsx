import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PACKAGE_DIAGRAM = {
  _style:
    'rounded=0;whiteSpace=wrap;html=1;fillColor=#FB9F41;strokeColor=none;fontColor=#FFFFFF;whiteSpace=wrap;',
  _width: 0,
  _height: 24,
}

export function PackageDiagram(props: DiagramNodeProps) {
  return (
    <Shape
      {...PACKAGE_DIAGRAM}
      {...props}
      _style={extendStyle(PACKAGE_DIAGRAM, props)}
    />
  )
}
