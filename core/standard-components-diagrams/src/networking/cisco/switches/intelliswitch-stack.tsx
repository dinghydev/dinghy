import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTELLISWITCH_STACK = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.intelliswitch_stack;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 66,
  _original_height: 69,
}

export function IntelliswitchStack(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTELLISWITCH_STACK}
      {...props}
      _style={extendStyle(INTELLISWITCH_STACK, props)}
    />
  )
}
