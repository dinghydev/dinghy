import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_ANALYTICS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_analytics;',
  _width: 50,
  _height: 34.55,
}

export function CitrixAnalytics(props: DiagramNodeProps) {
  return <Shape {...CITRIX_ANALYTICS} {...props} />
}
