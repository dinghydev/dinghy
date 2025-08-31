import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPLATE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.template;',
  },
  _width: 41,
  _height: 50,
}

export function Template(props: DiagramNodeProps) {
  return (
    <Shape {...TEMPLATE} {...props} _style={extendStyle(TEMPLATE, props)} />
  )
}
