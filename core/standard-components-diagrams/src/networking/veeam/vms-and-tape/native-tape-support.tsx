import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NATIVE_TAPE_SUPPORT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.native_tape_support;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function NativeTapeSupport(props: DiagramNodeProps) {
  return (
    <Shape
      {...NATIVE_TAPE_SUPPORT}
      {...props}
      _style={extendStyle(NATIVE_TAPE_SUPPORT, props)}
    />
  )
}
