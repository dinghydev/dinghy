import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCE_CODE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.source_code;',
  },
  _original_width: 57,
  _original_height: 78,
}

export function SourceCode(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOURCE_CODE}
      {...props}
      _style={extendStyle(SOURCE_CODE, props)}
    />
  )
}
