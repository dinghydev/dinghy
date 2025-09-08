import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORMATTED_BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.buttons.multiButton;fillColor=#008cff;strokeColor=#666666;mainText=;subText=;',
  },
  _original_width: 0,
  _original_height: 50,
}

export function FormattedButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORMATTED_BUTTON}
      {...props}
      _style={extendStyle(FORMATTED_BUTTON, props)}
    />
  )
}
