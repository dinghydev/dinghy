import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALL_MANAGER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.call_manager;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 38,
}

export function CallManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_MANAGER}
      {...props}
      _style={extendStyle(CALL_MANAGER, props)}
    />
  )
}
