import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRONT_END_PROCESSOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.front_end_processor;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 42,
  _original_height: 51,
}

export function FrontEndProcessor(props: NodeProps) {
  return (
    <Shape
      {...FRONT_END_PROCESSOR}
      {...props}
      _style={extendStyle(FRONT_END_PROCESSOR, props)}
    />
  )
}
