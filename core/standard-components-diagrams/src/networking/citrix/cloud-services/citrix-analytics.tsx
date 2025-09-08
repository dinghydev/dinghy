import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CITRIX_ANALYTICS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_analytics;',
  },
  _original_width: 50,
  _original_height: 34.55,
}

export function CitrixAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_ANALYTICS}
      {...props}
      _style={extendStyle(CITRIX_ANALYTICS, props)}
    />
  )
}
