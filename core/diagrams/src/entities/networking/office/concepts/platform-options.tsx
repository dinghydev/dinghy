import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLATFORM_OPTIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.platform_options;',
  },
  _original_width: 58,
  _original_height: 52,
}

export function PlatformOptions(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PLATFORM_OPTIONS)} />
}
