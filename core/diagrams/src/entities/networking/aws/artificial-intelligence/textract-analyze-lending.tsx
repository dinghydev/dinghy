import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXTRACT_ANALYZE_LENDING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.textract_analyze_lending;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function TextractAnalyzeLending(props: NodeProps) {
  return (
    <Shape
      {...TEXTRACT_ANALYZE_LENDING}
      {...props}
      _style={extendStyle(TEXTRACT_ANALYZE_LENDING, props)}
    />
  )
}
