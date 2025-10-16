import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTELLIGENT_TIERING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.intelligent_tiering;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function IntelligentTiering(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTELLIGENT_TIERING}
      {...props}
      _style={extendStyle(INTELLIGENT_TIERING, props)}
    />
  )
}
