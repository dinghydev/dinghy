import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.application_control;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ApplicationControl(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_CONTROL}
      {...props}
      _style={extendStyle(APPLICATION_CONTROL, props)}
    />
  )
}
