import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VREALIZE_ORCHESTRATOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vrealize_orchestrator;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function VrealizeOrchestrator(props: NodeProps) {
  return (
    <Shape
      {...VREALIZE_ORCHESTRATOR}
      {...props}
      _style={extendStyle(VREALIZE_ORCHESTRATOR, props)}
    />
  )
}
