import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PACKAGE_DIAGRAM_2 = {
  _style: {
    entity:
      'text;verticalAlign=middle;align=center;fontColor=#FB9F41;fontStyle=1;html=1;whiteSpace=wrap;',
  },
  _original_width: 1,
  _original_height: 24,
}

export function PackageDiagram2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PACKAGE_DIAGRAM_2}
      {...props}
      _style={extendStyle(PACKAGE_DIAGRAM_2, props)}
    />
  )
}
