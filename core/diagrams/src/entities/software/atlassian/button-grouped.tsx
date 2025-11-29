import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_GROUPED = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.rrect;rSize=10;fillColor=#F1F2F4;strokeColor=#ffffff;strokeWidth=2',
  },
  _width: 320,
  _height: 33,
}

export function ButtonGrouped(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_GROUPED)} />
}
