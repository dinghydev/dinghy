import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTRY_POINT = {
  _style: {
    entity:
      'ellipse;html=1;labelPosition=left;verticalLabelPosition=bottom;spacingBottom=10;align=right;verticalAlign=bottom;resizable=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function EntryPoint(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ENTRY_POINT)} />
}
