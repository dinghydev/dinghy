import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKBOX_ON_HOVER = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.checkbox;strokeColor=none;fillColor=#009587;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _width: 0,
  _height: 16,
}

export function CheckboxOnHover(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_ON_HOVER}
      {...props}
      _style={extendStyle(CHECKBOX_ON_HOVER, props)}
    />
  )
}
