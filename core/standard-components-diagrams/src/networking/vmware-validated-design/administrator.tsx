import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADMINISTRATOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.administrator;',
  },
  _original_width: 21.5,
  _original_height: 50,
}

export function Administrator(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADMINISTRATOR}
      {...props}
      _style={extendStyle(ADMINISTRATOR, props)}
    />
  )
}
