import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTENSIVE_CARE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.intensive_care;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function IntensiveCare(props: NodeProps) {
  return (
    <Shape
      {...INTENSIVE_CARE}
      {...props}
      _style={extendStyle(INTENSIVE_CARE, props)}
    />
  )
}
