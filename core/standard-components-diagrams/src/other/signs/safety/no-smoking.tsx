import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NO_SMOKING = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.no_smoking;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 98,
}

export function NoSmoking(props: DiagramNodeProps) {
  return (
    <Shape {...NO_SMOKING} {...props} _style={extendStyle(NO_SMOKING, props)} />
  )
}
