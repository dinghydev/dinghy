import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TITLE_BAR = {
  _style:
    'fillColor=#4DA1F5;strokeColor=none;shadow=1;gradientColor=none;fontSize=14;align=left;spacingLeft=50;fontColor=#ffffff;whiteSpace=wrap;html=1;',
  _width: 1000,
  _height: 40,
}

export function TitleBar(props: DiagramNodeProps) {
  return (
    <Shape {...TITLE_BAR} {...props} _style={extendStyle(TITLE_BAR, props)} />
  )
}
