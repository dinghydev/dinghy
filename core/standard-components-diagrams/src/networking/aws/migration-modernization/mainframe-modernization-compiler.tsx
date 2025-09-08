import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAINFRAME_MODERNIZATION_COMPILER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.mainframe_modernization_compiler;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function MainframeModernizationCompiler(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAINFRAME_MODERNIZATION_COMPILER}
      {...props}
      _style={extendStyle(MAINFRAME_MODERNIZATION_COMPILER, props)}
    />
  )
}
