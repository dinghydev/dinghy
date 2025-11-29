import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.machine_learning;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function MachineLearning(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MACHINE_LEARNING)} />
}
