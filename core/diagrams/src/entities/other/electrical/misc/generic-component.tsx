import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_COMPONENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.generic_component',
  },
  _original_width: 60,
  _original_height: 60,
}

export function GenericComponent(props: NodeProps) {
  return (
    <Shape
      {...GENERIC_COMPONENT}
      {...props}
      _style={extendStyle(GENERIC_COMPONENT, props)}
    />
  )
}
