import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iButton;strokeColor=#444444;fontColor=#ffffff;buttonText=;fontSize=8;fillColor=#dddddd;fillColor2=#3D5565;whiteSpace=wrap;align=center;sketch=0;',
  _width: 43.5,
  _height: 15,
}

export function Button(props: DiagramNodeProps) {
  return <Shape {...BUTTON} {...props} _style={extendStyle(BUTTON, props)} />
}
