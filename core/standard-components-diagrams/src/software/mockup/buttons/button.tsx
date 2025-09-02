import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.buttons.button;strokeColor=#666666;fontColor=#ffffff;mainText=;buttonStyle=round;fontSize=17;fontStyle=1;fillColor=#008cff;whiteSpace=wrap;',
  },
  _original_width: 150,
  _original_height: 50,
}

export function Button(props: DiagramNodeProps) {
  return <Shape {...BUTTON} {...props} _style={extendStyle(BUTTON, props)} />
}
