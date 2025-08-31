import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERBAL_INFORMATION = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.verbal;pointerEvents=1;',
  _width: 50,
  _height: 100,
}

export function VerbalInformation(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERBAL_INFORMATION}
      {...props}
      _style={extendStyle(VERBAL_INFORMATION, props)}
    />
  )
}
