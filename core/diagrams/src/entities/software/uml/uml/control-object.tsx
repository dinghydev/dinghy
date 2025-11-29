import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_OBJECT = {
  _style: {
    entity: 'ellipse;shape=umlControl;whiteSpace=wrap;html=1;',
  },
  _original_width: 70,
  _original_height: 80,
}

export function ControlObject(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROL_OBJECT)} />
}
