import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VREALIZE_LOG_INSIGHT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vrealize_log_insight;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function VrealizeLogInsight(props: NodeProps) {
  return (
    <Shape
      {...VREALIZE_LOG_INSIGHT}
      {...props}
      _style={extendStyle(VREALIZE_LOG_INSIGHT, props)}
    />
  )
}
