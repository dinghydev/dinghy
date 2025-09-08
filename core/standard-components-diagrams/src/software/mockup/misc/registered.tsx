import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REGISTERED = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.registeredIcon;',
  },
  _original_width: 25,
  _original_height: 25,
}

export function Registered(props: DiagramNodeProps) {
  return (
    <Shape {...REGISTERED} {...props} _style={extendStyle(REGISTERED, props)} />
  )
}
