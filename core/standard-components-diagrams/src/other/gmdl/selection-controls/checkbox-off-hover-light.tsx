import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_OFF_HOVER_LIGHT = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.checkbox;strokeColor=#666666;fillColor=none;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _width: 0,
  _height: 16,
}

export function CheckboxOffHoverLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_OFF_HOVER_LIGHT}
      {...props}
      _style={extendStyle(CHECKBOX_OFF_HOVER_LIGHT, props)}
    />
  )
}
