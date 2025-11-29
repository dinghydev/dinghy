import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORMATTED_BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.buttons.multiButton;fillColor=#008cff;strokeColor=#666666;mainText=;subText=;',
  },
  _width: 0,
  _height: 50,
}

export function FormattedButton(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FORMATTED_BUTTON)} />
}
