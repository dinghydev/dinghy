import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UI_THEME_DESIGNER = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=UI_Theme_Designer',
  _width: 60,
  _height: 60,
}

export function UiThemeDesigner(props: DiagramNodeProps) {
  return (
    <Shape
      {...UI_THEME_DESIGNER}
      {...props}
      _style={extendStyle(UI_THEME_DESIGNER, props)}
    />
  )
}
