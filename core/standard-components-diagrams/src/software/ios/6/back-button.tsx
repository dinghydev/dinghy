import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACK_BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iButtonBack;strokeColor=#444444;fontColor=#ffffff;buttonText=;fontSize=8;fillColor=#dddddd;fillColor2=#3D5565;spacingLeft=10;whiteSpace=wrap;align=center;sketch=0;',
  },
  _original_width: 43.5,
  _original_height: 15,
}

export function BackButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACK_BUTTON}
      {...props}
      _style={extendStyle(BACK_BUTTON, props)}
    />
  )
}
