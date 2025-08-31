import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USE_CASE_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.useCaseExtPt;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 80,
}

export function UseCase2(props: DiagramNodeProps) {
  return (
    <Shape {...USE_CASE_2} {...props} _style={extendStyle(USE_CASE_2, props)} />
  )
}
