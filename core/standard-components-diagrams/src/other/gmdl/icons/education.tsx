import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDUCATION = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.education;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 20,
  _height: 20,
}

export function Education(props: DiagramNodeProps) {
  return (
    <Shape {...EDUCATION} {...props} _style={extendStyle(EDUCATION, props)} />
  )
}
