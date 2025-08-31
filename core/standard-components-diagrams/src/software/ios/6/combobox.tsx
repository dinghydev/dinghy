import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMBOBOX = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iComboBox;spacingTop=2;spacingLeft=2;align=left;strokeColor=#444444;fontColor=#666666;buttonText=;fontSize=8;fillColor=#dddddd;fillColor2=#3D5565;sketch=0;whiteSpace=wrap;',
  _width: 57.99999999999999,
  _height: 15,
}

export function Combobox(props: DiagramNodeProps) {
  return (
    <Shape {...COMBOBOX} {...props} _style={extendStyle(COMBOBOX, props)} />
  )
}
