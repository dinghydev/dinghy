import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.office;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 20,
  _height: 20,
}

export function Office(props: DiagramNodeProps) {
  return <Shape {...OFFICE} {...props} _style={extendStyle(OFFICE, props)} />
}
