import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VREALIZE_LOG_INSIGHT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vrealize_log_insight;',
  _width: 50,
  _height: 50,
}

export function VrealizeLogInsight(props: DiagramNodeProps) {
  return <Shape {...VREALIZE_LOG_INSIGHT} {...props} />
}
