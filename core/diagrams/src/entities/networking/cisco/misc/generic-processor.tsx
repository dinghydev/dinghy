import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_PROCESSOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.generic_processor;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 58,
  _height: 83,
}

export function GenericProcessor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GENERIC_PROCESSOR)} />
}
